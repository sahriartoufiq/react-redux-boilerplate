import axios from "axios";
import { API_BASE_URL } from "../constants";

axios.defaults.timeout = 500;

// axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.get["Content-Type"] = "application/json";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL
});

export default axiosInstance;
