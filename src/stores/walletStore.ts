import { create } from "zustand";
import { ethers } from "ethers";
import toast from "react-hot-toast";

import { getContract } from "@/contracts/contracts";
import { txConfig, getterContract } from "@/contracts/fetchLogic";

const mockUsdc = getContract("MockUSDC");
const contractAddress = mockUsdc!.address;
const abi = mockUsdc!.abi;

interface WalletState {
  account: string | null;
  provider: ethers.BrowserProvider | null;
  signer: ethers.JsonRpcSigner | null;
  isLoading: boolean;

  balance: string;
  allowance: string;
  totalSupply: string;
  name: string;
  symbol: string;
  decimals: number;
  approvalStatus: string;

  // Inputs
  spender: string;
  value: string;
  subtractedValue: string;
  addedValue: string;
  from: string;
  to: string;
  amount: string;

  // Setters
  setSpender: (v: string) => void;
  setValue: (v: string) => void;
  setSubtractedValue: (v: string) => void;
  setAddedValue: (v: string) => void;
  setFrom: (v: string) => void;
  setTo: (v: string) => void;
  setAmount: (v: string) => void;

  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;

  // Contract handlers
  handleBalanceOf: () => Promise<void>;
  handleAllowance: () => Promise<void>;
  handleApprove: () => Promise<void>;
  handleTotalSupply: () => Promise<void>;
  handleName: () => Promise<void>;
  handleSymbol: () => Promise<void>;
  handleDecimals: () => Promise<void>;
  handleDecreaseAllowance: () => Promise<void>;
  handleIncreaseAllowance: () => Promise<void>;
  handleTransferFrom: () => Promise<void>;
  handleTransfer: () => Promise<void>;
}

export const useWalletStore = create<WalletState>((set, get) => ({
  account: null,
  provider: null,
  signer: null,
  isLoading: false,

  balance: "0",
  allowance: "0",
  totalSupply: "0",
  name: "",
  symbol: "",
  decimals: 0,
  approvalStatus: "",

  spender: "",
  value: "",
  subtractedValue: "",
  addedValue: "",
  from: "",
  to: "",
  amount: "",

  setSpender: (v) => set({ spender: v }),
  setValue: (v) => set({ value: v }),
  setSubtractedValue: (v) => set({ subtractedValue: v }),
  setAddedValue: (v) => set({ addedValue: v }),
  setFrom: (v) => set({ from: v }),
  setTo: (v) => set({ to: v }),
  setAmount: (v) => set({ amount: v }),

  connectWallet: async () => {
    if (typeof window == "undefined" || !window.ethereum) {
      toast.error("Please install MetaMask");
      return;
    }

    try {
      set({ isLoading: true });
      const _provider = new ethers.BrowserProvider(window.ethereum);
      await _provider.send("eth_requestAccounts", []);
      const _signer = await _provider.getSigner();
      const _address = await _signer.getAddress();

      set({
        account: _address,
        provider: _provider,
        signer: _signer,
      });

      localStorage.setItem("isWalletConnected", "true");
      toast.success("Wallet connected");

      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length > 0) {
          set({ account: accounts[0] });
          toast("Account changed!");
        } else {
          set({ account: null, signer: null, provider: null });
          localStorage.removeItem("isWalletConnected");
          toast("Disconnected from wallet");
        }
      });

      window.ethereum.on("chainChanged", () => {
        toast("Network changed, reloading...");
        window.location.reload();
      });
    } catch (error) {
      console.error("Wallet connection error:", error);
      toast.error("Failed to connect wallet!");
    } finally {
      set({ isLoading: false });
    }
  },

  disconnectWallet: () => {
    set({ account: null, provider: null, signer: null });
    localStorage.removeItem("isWalletConnected");
    toast.success("Wallet disconnected!");
  },

  // --- Contract Functions ---
  handleBalanceOf: async () => {
    const { spender } = get();
    await getterContract({
      contractAddress,
      abi,
      callback: async (contract) => {
        const res = await contract.balanceOf(spender);
        set({ balance: res.toString() });
      },
    });
  },

  handleAllowance: async () => {
    const { account, spender } = get();
    await getterContract({
      contractAddress,
      abi,
      callback: async (contract) => {
        const res = await contract.allowance(account, spender);
        set({ allowance: res.toString() });
      },
    });
  },

  handleApprove: async () => {
    const { spender, value } = get();
    await getterContract({
      contractAddress,
      abi,
      callback: async (contract) => {
        const tx = await contract.approve(spender, value, txConfig);
        await tx.wait();
        set({ approvalStatus: "Approval successful!" });
        toast.success("Approved successfully!");
      },
    });
  },

  handleTotalSupply: async () => {
    await getterContract({
      contractAddress,
      abi,
      callback: async (contract) => {
        const res = await contract.totalSupply();
        set({ totalSupply: res.toString() });
      },
    });
  },

  handleName: async () => {
    await getterContract({
      contractAddress,
      abi,
      callback: async (contract) => {
        const res = await contract.name();
        set({ name: res });
      },
    });
  },

  handleSymbol: async () => {
    await getterContract({
      contractAddress,
      abi,
      callback: async (contract) => {
        const res = await contract.symbol();
        set({ symbol: res });
      },
    });
  },

  handleDecimals: async () => {
    await getterContract({
      contractAddress,
      abi,
      callback: async (contract) => {
        const res = await contract.decimals();
        set({ decimals: Number(res) });
      },
    });
  },

  handleDecreaseAllowance: async () => {
    const { spender, subtractedValue } = get();
    await getterContract({
      contractAddress,
      abi,
      callback: async (contract) => {
        const tx = await contract.decreaseAllowance(
          spender,
          subtractedValue,
          txConfig
        );
        await tx.wait();
        toast.success("Allowance decreased");
      },
    });
  },

  handleIncreaseAllowance: async () => {
    const { spender, addedValue } = get();
    await getterContract({
      contractAddress,
      abi,
      callback: async (contract) => {
        const tx = await contract.increaseAllowance(
          spender,
          addedValue,
          txConfig
        );
        await tx.wait();
        toast.success("Allowance increased");
      },
    });
  },

  handleTransferFrom: async () => {
    const { from, to, amount } = get();
    await getterContract({
      contractAddress,
      abi,
      callback: async (contract) => {
        const tx = await contract.transferFrom(from, to, amount, txConfig);
        await tx.wait();
        toast.success("TransferFrom success");
      },
    });
  },

  handleTransfer: async () => {
    const { to, amount } = get();
    await getterContract({
      contractAddress,
      abi,
      callback: async (contract) => {
        const tx = await contract.transfer(to, amount, txConfig);
        await tx.wait();
        toast.success("Transfer success");
      },
    });
  },
}));
