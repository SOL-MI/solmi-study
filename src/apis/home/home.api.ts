import { customAxios } from "../instance";
import { GetPopularRequest } from "./home.type";

export const getPopular = async (req: GetPopularRequest) => {
  const response = await customAxios.get("/movie/popular", {
    params: req,
  });
  return response.data;
};
