import { create } from "zustand";
import { Contract } from "ethers";
import { getContract } from "@/contracts/contracts";
import { getterContract, txConfig } from "@/contracts/fetchLogic";
import { useWalletStore } from "./walletStore";
import toast from "react-hot-toast";

const hotelTokenizationContract = getContract("LaLoHotelTokenization");
const contractAddress = hotelTokenizationContract!.address;
const abi = hotelTokenizationContract!.abi;

type HotelTokenizationState = {
  hotelId: string;
  rate: number;
  auctionEndDate: string;
  availableRevenues: string;
  availableTokens: string;
  collectedRevenues: string;
  currentTokens: string;
  remainingPromisedRevenues: string;
  transferLimit: string;
  vaultAddress: string;
  month: string;

  // setters
  setHotelId: (id: string) => void;

  // contract calls
  handleBuyLaLoTokens: (buyInUSDC: string) => Promise<void>;
  handleGetAvailableRevenues: () => Promise<void>;
  handleGetAvailableTokens: () => Promise<void>;
  handleGetCollectedRevenues: () => Promise<void>;
  handleGetCurrentTokens: () => Promise<void>;
  handleGetRemainingPromisedRevenues: () => Promise<void>;
  handleGetTransferLimit: () => Promise<void>;
  handleGetVaultAddress: () => Promise<void>;
  handleGetMonth: () => Promise<void>;
  handleOwnerDepositUSDC: (depositInUSDC: string) => Promise<void>;
  handleWithdrawUSDC: (withdrawInUSDC: string) => Promise<void>;
  handleSetMonth: (month: string) => Promise<void>;
  handleGetRate: () => Promise<void>;
  handleGetAuctionEndDate: () => Promise<void>;
};

export const useHotelTokenizationStore = create<HotelTokenizationState>(
  (set, get) => ({
    hotelId: "",
    rate: 0,
    auctionEndDate: "",
    availableRevenues: "0",
    availableTokens: "0",
    collectedRevenues: "0",
    currentTokens: "0",
    remainingPromisedRevenues: "0",
    transferLimit: "0",
    vaultAddress: "",
    month: "0",

    setHotelId: (id) => set({ hotelId: id }),

    // --- Contract Calls ---
    handleBuyLaLoTokens: async (buyInUSDC) => {
      const { signer, account } = useWalletStore.getState();
      const { hotelId } = get();
      if (!signer || !account) {
        toast.error("Wallet not connected");
        return;
      }

      const contract = new Contract(contractAddress, abi, signer);
      const tx = await contract.buyLaLoTokens(hotelId, buyInUSDC, txConfig);
      await tx.wait();
      toast.success("Bought LALO tokens");
    },

    handleGetAvailableRevenues: async () => {
      const { hotelId } = get();
      await getterContract({
        contractAddress,
        abi,
        callback: async (contract) => {
          const res = await contract.getAvailableRevenues(hotelId);
          set({ availableRevenues: res.toString() });
        },
      });
    },

    handleGetAvailableTokens: async () => {
      const { hotelId } = get();
      await getterContract({
        contractAddress,
        abi,
        callback: async (contract) => {
          const res = await contract.getAvailableTokens(hotelId);
          set({ availableTokens: res.toString() });
        },
      });
    },

    handleGetCollectedRevenues: async () => {
      const { hotelId } = get();
      await getterContract({
        contractAddress,
        abi,
        callback: async (contract) => {
          const res = await contract.getCollectedRevenues(hotelId);
          set({ collectedRevenues: res.toString() });
        },
      });
    },

    handleGetCurrentTokens: async () => {
      const { hotelId } = get();
      await getterContract({
        contractAddress,
        abi,
        callback: async (contract) => {
          const res = await contract.getCurrentTokens(hotelId);
          set({ currentTokens: res.toString() });
        },
      });
    },

    handleGetRemainingPromisedRevenues: async () => {
      const { hotelId } = get();
      await getterContract({
        contractAddress,
        abi,
        callback: async (contract) => {
          const res = await contract.getRemainingPromisedRevenues(hotelId);
          set({ remainingPromisedRevenues: res.toString() });
        },
      });
    },

    handleGetTransferLimit: async () => {
      const { hotelId } = get();
      await getterContract({
        contractAddress,
        abi,
        callback: async (contract) => {
          const res = await contract.getTransferLimit(hotelId);
          set({ transferLimit: res.toString() });
        },
      });
    },

    handleGetVaultAddress: async () => {
      const { hotelId } = get();
      await getterContract({
        contractAddress,
        abi,
        callback: async (contract) => {
          const res = await contract.getVaultAddress(hotelId);
          set({ vaultAddress: res.toString() });
        },
      });
    },

    handleGetMonth: async () => {
      const { hotelId } = get();
      await getterContract({
        contractAddress,
        abi,
        callback: async (contract) => {
          const res = await contract.getMonthTest(hotelId);
          set({ month: res.toString() });
        },
      });
    },

    handleOwnerDepositUSDC: async (amount) => {
      const { signer, account } = useWalletStore.getState();
      const { hotelId } = get();
      if (!signer || !account) {
        toast.error("Wallet not connected");
        return;
      }

      const contract = new Contract(contractAddress, abi, signer);
      const tx = await contract.ownerDepositUSDC(hotelId, amount, txConfig);
      await tx.wait();
      toast.success("USDC Deposited!");
    },

    handleWithdrawUSDC: async (amount) => {
      const { signer, account } = useWalletStore.getState();
      const { hotelId } = get();
      if (!signer || !account) {
        toast.error("Wallet not connected");
        return;
      }

      const contract = new Contract(contractAddress, abi, signer);
      const tx = await contract.withdrawUSDC(hotelId, amount, txConfig);
      await tx.wait();
      toast.success("USDC Withdrawn!");
    },

    handleSetMonth: async (month) => {
      const { signer, account } = useWalletStore.getState();
      const { hotelId } = get();
      if (!signer || !account) {
        toast.error("Wallet not connected");
        return;
      }

      const contract = new Contract(contractAddress, abi, signer);
      const tx = await contract.setMonthTest(hotelId, month, txConfig);
      await tx.wait();
      toast.success("Month Set!");
    },

    handleGetRate: async () => {
      const { hotelId } = get();
      await getterContract({
        contractAddress,
        abi,
        callback: async (contract) => {
          const rate = await contract.getRate(hotelId);
          set({ rate: rate.toString() });
        },
      });
    },

    handleGetAuctionEndDate: async () => {
      const { hotelId } = get();
      await getterContract({
        contractAddress,
        abi,
        callback: async (contract) => {
          const endDate = await contract.getAuctionEndDate(hotelId);
          set({ auctionEndDate: endDate.toString() });
          toast.success("Auction End Date: " + endDate.toString());
        },
      });
    },
  })
);
