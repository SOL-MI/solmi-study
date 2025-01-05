import axios, { AxiosInstance } from "axios";

const customAxios: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
  },
});

customAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    // NOTE: 일괄 에러 코드 처리한 경우에 여기서 처리하기
    // if (error.response.status === 404) {
    //   window.location.href = "/NotFoundPage";
    // }
    return Promise.reject(error);
  }
);

export { customAxios };
