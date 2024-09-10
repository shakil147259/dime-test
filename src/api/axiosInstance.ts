import axios from "axios";

const defaultBaseUrl = "http://localhost:3001";

const api = axios.create({
  baseURL: defaultBaseUrl,
  timeout: 10000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
