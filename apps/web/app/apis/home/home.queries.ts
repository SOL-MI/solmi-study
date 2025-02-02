import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { GetPopularRequest, PopularResponse } from "./home.type";
import { getPopular } from "./home.api";

export type CommonQueryOptions<TData = unknown, TError = unknown> = Omit<
  UseQueryOptions<TData, TError>,
  "queryKey" | "queryFn"
>;

export const usePopularQuery = (
  req: GetPopularRequest,
  option?: CommonQueryOptions<PopularResponse>
) =>
  useQuery<PopularResponse, any>({
    queryKey: ["popular"],
    queryFn: () => getPopular(req),
    staleTime: option?.staleTime ?? 1000 * 60 * 60, // 1시간
    gcTime: option?.gcTime ?? 1000 * 60 * 60,
    ...option,
  });
