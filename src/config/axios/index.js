import { store } from "@app/store";
import axios from "axios";

// axios.defaults.baseURL = "http://manager.sohoceravietnam.com/api";
axios.defaults.baseURL = "http://localhost/smart-project-manager-be/public/api";
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
