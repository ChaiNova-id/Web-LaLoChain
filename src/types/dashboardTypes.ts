export type PropertyOwner = {
  id: string;
  property_id: string;
  name: string;
  description: string;
  location: string;
  rate: number;
  availableTokens: number;
  remainingDebt: number;
  status: "Verified" | "Not Verified";
};

export type PropertyInvestor = {
  id: string;
  property_id: string;
  name: string;
  description: string;
  location: string;
  tokensOwn: number;
  withdrawLimit: number;
  withdrawn: number;
  status: "Verified" | "Not Verified";
};
