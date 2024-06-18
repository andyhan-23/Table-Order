// import axios from "axios";

// let baseUrl = "";
// try {
//   baseUrl = `${window.location.protocol}//${window.location.host}`;
// } catch {}

// const fetcher = (url: string) =>
//   axios.get(`${baseUrl}${url}`).then(({ data }) => data);

// export default fetcher;

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
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const fetcher = (url: string) =>
  axiosInstance.get(url).then(({ data }) => data);

export default fetcher;
