import axios from "axios";

let baseUrl = "";
try {
  baseUrl = `${window.location.protocol}//${window.location.host}`;
} catch {}

const fetcher = (url: string) =>
  axios.get(`${baseUrl}${url}`).then(({ data }) => data);

export default fetcher;
