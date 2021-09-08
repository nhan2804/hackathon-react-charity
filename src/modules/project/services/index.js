import axios from "axios";

export const createProject = (requestData) => {
  return axios.post("/project", requestData);
};
export const fetchProject = () => {
  return axios.get("/project");
};
