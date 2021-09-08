import axios from "axios";

export const login = (requestData) => {
  return axios.post("/auth/login", requestData);
};

export const register = (requestData) => {
  return axios.post("/auth/register", requestData);
};
