import { UseQueryOptions } from "react-query";

export type CommonQueryOptions<TData = unknown, TError = unknown> = Omit<
  UseQueryOptions<TData, TError>,
  "queryKey" | "queryFn"
>;
