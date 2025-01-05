import { useQuery } from "react-query";
import { GetPopularRequest } from "./home.type";
import { getPopular } from "./home.api";

export const useGetPopular = (req: GetPopularRequest) => {
  return useQuery({
    queryKey: ["popular"],
    queryFn: () => getPopular(req),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 5,
  });
};
