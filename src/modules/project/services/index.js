import axios from "axios";

export const createProject = (requestData) => {
  return axios.post("/project", requestData);
};
export const fetchProject = () => {
  return axios.get("/project");
};
export const getProjectDetail = (id) => {
  return axios.get(`/project/${id}`);
};
export const fetchProjectShared = () => {
  return axios.get("/project/shared");
};
export const fetchProjectMe = () => {
  return axios.get("/project/me");
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
export const getStaff = async (projectId) => {
  return axios.get(`/project/${projectId}/join/staff`);
};
