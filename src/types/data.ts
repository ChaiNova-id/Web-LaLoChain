export type AddPropertyFormData = {
  name: string;
  description: string;
  location: string;
  totalRevenue: string;
  upfrontPrice: string;
  uploadFinancialReport: File | undefined;
  totalMonths: string;
  auctionDuration: string;
};

export type OwnerDepositUSDCFormData = {
  amount: string;
};
