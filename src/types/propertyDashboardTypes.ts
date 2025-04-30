export type Property = {
    id: string;
    name: string;
    description: string;
    location: string;
    rate: string;
    availableTokens: string;
    remainingDebt: string;
    status: "Verified" | "Not Verified";
  };