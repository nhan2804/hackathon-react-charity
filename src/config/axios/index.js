import { store } from "@app/store";
import axios from "axios";

axios.defaults.baseURL = "http://manager.sohoceravietnam.com/api";
export const configAxios = () => {
  axios.interceptors.request.use(
    (config) => {
      if (!config.headers.Authorization) {
        const token = store.getState().auth.token;

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }

      return config;
    },
    (error) => Promise.reject(error)
  );
};
