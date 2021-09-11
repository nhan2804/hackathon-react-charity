import axios from "axios";

export const createProject = (requestData) => {
  return axios.post("/project", requestData);
};
export const fetchProject = () => {
  return axios.get("/project");
};
export const fetchProjectShared = () => {
  return axios.get("/project/shared");
};
export const assignProject = (id, requestData) => {
  return axios.post(`project/${id}/task/assign`, requestData);
};
export const addClient = (id, requestData) => {
  return axios.post(`project/${id}/join/client`, {
    ...requestData,
    type_user: "CLIENT",
  });
};
