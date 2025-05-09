import { useLoadingStore } from "@/stores/loadingStore";
import { useWalletStore } from "@/stores/walletStore";
import { Contract, Interface, InterfaceAbi } from "ethers";
import toast from "react-hot-toast";

export const txConfig = {
  gasLimit: 1_000_000,
};

interface GetContractProps {
  contractAddress: string;
  abi: Interface | InterfaceAbi;
  callback: (contract: Contract) => Promise<void>;
}

export const getterContract = async ({
  contractAddress,
  abi,
  callback,
}: GetContractProps): Promise<void> => {
  const { setLoading } = useLoadingStore.getState();
  const { account, signer } = useWalletStore.getState();

  try {
    setLoading(true);

    if (!account || !signer) {
      toast.error("Please connect your wallet.");
      return;
    }

    if (!signer) {
      toast.error("Signer not found. Please connect your wallet.");
      return;
    }

    const contract = new Contract(contractAddress, abi, signer);

    await callback(contract);
  } catch (error) {
    console.error("Error in getterContract:", error);
    toast.error("An error occurred while interacting with the contract.");
  } finally {
    setLoading(false);
  }
};
