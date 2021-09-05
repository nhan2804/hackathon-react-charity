import axios from "axios";

export const login = (requestData) => {
  return axios.post("/api/auth/login", requestData);
};

export const register = (requestData) => {
  return axios.post("/api/auth/register", requestData);
};
