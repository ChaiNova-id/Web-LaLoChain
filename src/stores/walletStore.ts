import { ethers } from "ethers";
import toast from "react-hot-toast";
import { create } from "zustand";

interface WalletState {
  account: string | null;
  provider: ethers.BrowserProvider | null;
  signer: ethers.JsonRpcSigner | null;
  isLoading: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

export const useWalletStore = create<WalletState>((set) => ({
  account: null,
  provider: null,
  signer: null,
  isLoading: false,

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
    set({
      account: null,
      provider: null,
      signer: null,
    });
    localStorage.removeItem("isWalletConnected");
    toast.success("Wallet disconnected!");
  },
}));
