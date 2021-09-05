import axios from "axios";

export const createProject = (requestData) => {
  return axios.post("/api/project", requestData);
};
