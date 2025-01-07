import { customAxios } from "../instance";
import { GetPopularRequest, PopularResponse } from "./home.type";

export const getPopular = (req: GetPopularRequest): Promise<PopularResponse> =>
  customAxios
    .get("/movie/popular", {
      params: req,
    })
    .then((res) => res.data);
