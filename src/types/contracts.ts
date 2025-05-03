import { Contract } from "ethers";

export type ABISingle = {
  type: string;
  name: string;
  inputs: Array<{
    name: string;
    type: string;
    internalType: string;
  }>;
  outputs: Array<{
    name: string;
    type: string;
    internalType: string;
  }>;
  stateMutability: string;
};

export type AvailableContracts =
  | "MockUSDC"
  | "LaLoHotelRegistry"
  | "LaLoHotelTokenization";

export type ABI = ABISingle[];

export type ContractCallback = (contract: Contract) => Promise<void>;

export type ContractType = {
  name: AvailableContracts;
  address: string;
  abi: ABI;
};

export interface GetContractProps {
  isConnected: boolean;
  contractAddress: string;
  abi: ABI;
  callback: ContractCallback;
  setLoading: (loading: boolean) => void;
}
