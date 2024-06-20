import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  async (config) => {
    if (process.env.NODE_ENV === "development") {
      if (typeof window === "undefined") {
        const { server } = await import("../mock/server");
        server.listen();
      } else {
        const { worker } = await import("../mock/browser");
        worker.start();
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

const fetcher = (url: string) =>
  axiosInstance.get(url).then(({ data }) => data);

export default fetcher;
