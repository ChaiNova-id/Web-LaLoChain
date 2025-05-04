import MockUSDC from "./json/MockUSDC.json";
import LaLoHotelTokenization from "./json/LaLoHotelTokenization.json";
import LaLoHotelRegistry from "./json/LaLoHotelRegistry.json";
import { ContractType, ABISingle, AvailableContracts } from "@/types/contracts";

// MockUSDC deployed at: 0x1D5eb37CA674f99B75CC974D4cBBE62AFE98C402
// LaLoTokenFactory deployed at: 0x0a4721b4156f34B934121616FCbCF1A3Cb049406
// HotelRegistry deployed at: 0x515241414aC4Fd32f43C3B4Efd66074320456B2b
// HotelTokenization deployed at: 0x11e9d3316746494Fa5dAa42f9F58094F50d83911

const contracts: ContractType[] = [
  {
    name: "MockUSDC",
    address: "0x788A80c50cc0a16fDCE6f011EeB0df60F96291B5",
    abi: MockUSDC.abi as ABISingle[],
  },
  {
    name: "LaLoHotelRegistry",
    address: "0x3F9452B299fE5D75B55f7A180DEEE777A78966Cf",
    abi: LaLoHotelRegistry.abi as ABISingle[],
  },
  {
    name: "LaLoHotelTokenization",
    address: "0xF9d0d3B21e3BDA134b87CEe076EDa0Af2664E26A",
    abi: LaLoHotelTokenization.abi as ABISingle[],
  },
];

export const getContract = (name: AvailableContracts) => {
  const contract = contracts.find((contract) => contract.name === name);
  if (!contract) {
    throw new Error(`Contract ${name} not found`);
  }
  return contract;
};

export default contracts;
