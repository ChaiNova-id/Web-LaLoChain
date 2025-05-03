export interface CreatePropertyRequest {
  property_id: string;
  name: string;
  description: string;
  location: string;
  revenue_report: string;
  wallet_id: string;
}

export type PaginationMeta = {
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
};
