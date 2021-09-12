import axios from "axios";

const fetchFeedback = (id) => {
  return axios.get(`project/${id}/feedbacks`);
};
const createFeedback = (formData) => {
  return axios.post(`feedback`, formData);
};
export const createFeedBackComment = (fbId, requestData) => {
  return axios.post("/comment", {
    ...requestData,
    type_comment: "FEEDBACK",
    post_id: fbId,
  });
};

export const getAllFeedbackComment = (idProject, idFeedback) => {
  return axios.get(`project/${idProject}/feedbacks/${idFeedback}/comments`);
};
export const addClient = (id, requestData) => {
  return axios.post(`project/${id}/join/client`, {
    ...requestData,
    type_user: "CLIENT",
  });
};
export { fetchFeedback, createFeedback };
