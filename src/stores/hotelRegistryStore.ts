import { create } from "zustand";
import { Contract } from "ethers";
import toast from "react-hot-toast";

import { getContract } from "@/contracts/contracts";
import { getterContract, txConfig } from "@/contracts/fetchLogic";
import { useWalletStore } from "./walletStore";

const hotelRegistryContract = getContract("LaLoHotelRegistry");
const contractAddress = hotelRegistryContract!.address;
const abi = hotelRegistryContract!.abi;

type Hotel = {
  owner: string;
  name: string;
  vaultAddress: string;
};

interface HotelRegistryState {
  // State
  hotelId: string;
  hotelInfo: Hotel;
  isHotelRegistered: boolean;
  vaultAddress: string;
  nextHotelId: string | null;
  hotelName: string;
  usdcPrice: string;
  totalMonth: string;
  tokenAmount: string;
  auctionDuration: number;

  // Setters
  setHotelId: (id: string) => void;
  setHotelInfo: (info: Hotel) => void;
  setIsHotelRegistered: (state: boolean) => void;
  setVaultAddress: (addr: string) => void;
  setNextHotelId: (id: string | null) => void;
  setHotelName: (name: string) => void;
  setUsdcPrice: (price: string) => void;
  setTotalMonth: (month: string) => void;
  setTokenAmount: (amount: string) => void;
  setAuctionDuration: (duration: number) => void;

  // Contract Calls
  handleGetHotelInfo: () => Promise<void>;
  handleIsHotelRegistered: () => Promise<void>;
  handleGetVaultAddress: () => Promise<void>;
  handleNextHotelId: () => Promise<void>;
  handleRegisterHotel: () => Promise<void>;
}

export const useHotelRegistryStore = create<HotelRegistryState>((set, get) => ({
  hotelId: "",
  hotelInfo: {
    owner: "",
    name: "",
    vaultAddress: "",
  },
  isHotelRegistered: false,
  vaultAddress: "",
  nextHotelId: null,
  hotelName: "",
  usdcPrice: "",
  totalMonth: "",
  tokenAmount: "",
  auctionDuration: 0,

  // Setters
  setHotelId: (id) => set({ hotelId: id }),
  setHotelInfo: (info) => set({ hotelInfo: info }),
  setIsHotelRegistered: (state) => set({ isHotelRegistered: state }),
  setVaultAddress: (addr) => set({ vaultAddress: addr }),
  setNextHotelId: (id) => set({ nextHotelId: id }),
  setHotelName: (name) => set({ hotelName: name }),
  setUsdcPrice: (price) => set({ usdcPrice: price }),
  setTotalMonth: (month) => set({ totalMonth: month }),
  setTokenAmount: (amount) => set({ tokenAmount: amount }),
  setAuctionDuration: (duration) => set({ auctionDuration: duration }),

  // Contract Logic
  handleGetHotelInfo: async () => {
    const { hotelId, setHotelInfo } = get();
    const { account } = useWalletStore.getState();
    if (!account) {
      toast.error("Wallet not connected");
      return;
    }

    await getterContract({
      contractAddress,
      abi,
      callback: async (contract: Contract) => {
        const info = await contract.hotels(hotelId);
        setHotelInfo(info);
        toast.success("Hotel info fetched successfully");
      },
    });
  },

  handleIsHotelRegistered: async () => {
    const { hotelId, setIsHotelRegistered } = get();
    const { account } = useWalletStore.getState();
    if (!account) {
      toast.error("Wallet not connected");
      return;
    }

    await getterContract({
      contractAddress,
      abi,
      callback: async (contract: Contract) => {
        const registered = await contract.isHotelRegistered(hotelId);
        setIsHotelRegistered(registered);
        toast.success("Registration status: " + registered);
      },
    });
  },

  handleGetVaultAddress: async () => {
    const { hotelId, setVaultAddress } = get();
    const { account } = useWalletStore.getState();
    if (!account) {
      toast.error("Wallet not connected");
      return;
    }

    await getterContract({
      contractAddress,
      abi,
      callback: async (contract: Contract) => {
        const addr = await contract.getVaultAddress(hotelId);
        setVaultAddress(addr);
        toast.success("Vault address: " + addr);
      },
    });
  },

  handleNextHotelId: async () => {
    const { setNextHotelId } = get();
    const { account } = useWalletStore.getState();
    if (!account) {
      toast.error("Wallet not connected");
      return;
    }

    await getterContract({
      contractAddress,
      abi,
      callback: async (contract: Contract) => {
        const id = await contract.nextHotelId();
        setNextHotelId(id.toString());
        toast.success("Next hotel ID: " + id.toString());
      },
    });
  },

  handleRegisterHotel: async () => {
    const { hotelName, tokenAmount, usdcPrice, totalMonth, auctionDuration } =
      get();
    const { signer } = useWalletStore.getState();
    if (!signer) {
      toast.error("Signer not found. Please connect your wallet.");
      return;
    }

    await getterContract({
      contractAddress,
      abi,
      callback: async (contract: Contract) => {
        const tx = await contract.registerHotel(
          hotelName,
          tokenAmount,
          usdcPrice,
          totalMonth,
          auctionDuration * 86400,
          txConfig
        );
        console.log("Transaction hash:", tx.hash);
        await tx.wait();
        toast.success("Hotel registered! Hash: " + tx.hash);
      },
    });
  },
}));
