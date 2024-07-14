import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { UnauthorizedError } from "./repository/errors";

export const getCsrfToken = (): string => {
  const metaElem = document.querySelector("meta[name='csrf-token']");
  if (!metaElem) {
    throw Error("meta[name=csrf-token] is not founded.");
  }
  const csrfToken = metaElem.getAttribute("content");
  if (!csrfToken) {
    throw Error("csrf token is not set");
  }
  return csrfToken;
};

const defaultOptions: AxiosRequestConfig = {
  headers: { 'X-Requested-With': 'XMLHttpRequest' }
};

export const axiosClient = axios.create(defaultOptions);

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.log(error.response.data);
      throw error;
    } else if (error.response?.status === 400) {
      console.log(error.response.data);
      throw error;
    }
  }
);;