import { Property } from "@prisma/client";
import { PaginationMeta } from "./api";

export type PaginatedPropertyResponse = {
  owner: string;
  data: Property[];
  pagination: PaginationMeta;
};
