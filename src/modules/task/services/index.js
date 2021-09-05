import axios from "axios";

export const createTask = (requestData) => {
  return axios.post("/api/task", requestData);
};
export const fetchTask = (id) => {
  return axios.get(`/api/project/${id}/tasks`);
};
