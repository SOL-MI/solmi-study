import { useQuery } from "react-query";
import { GetPopularRequest, PopularResponse } from "./home.type";
import { getPopular } from "./home.api";
import { CommonQueryOptions } from "../../types/query.type";

export const usePopularQuery = (
  req: GetPopularRequest,
  option?: CommonQueryOptions<PopularResponse>
) =>
  useQuery<PopularResponse>({
    queryKey: ["popular"],
    queryFn: () => getPopular(req),
    staleTime: option?.staleTime ?? 1000 * 60 * 60, // 1시간
    cacheTime: option?.cacheTime ?? 1000 * 60 * 60,
    ...option,
  });
