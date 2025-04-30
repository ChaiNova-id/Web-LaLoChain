export type PropertyOwner = {
  id: string;
  name: string;
  description: string;
  location: string;
  rate: string;
  availableTokens: string;
  remainingDebt: string;
  status: "Verified" | "Not Verified";
};

export type PropertyInvestor = {
  id: string;
  name: string;
  description: string;
  location: string;
  tokensOwn: string;
  withdrawLimit: string;
  withdrawn: string;
  status: "Verified" | "Not Verified";
};
