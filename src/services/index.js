import axios from "axios";

const APIUploadImage = axios.create({
  baseURL: "https://api.imgbb.com",
  headers: {},
});
const uploadImage = (data) => {
  return APIUploadImage.post(
    "1/upload?key=93804877e22f283eb8a2e639dcd8ec54",
    data
  );
};
export const getRole = (id) => {
  return axios.get(`/project/${id}/check-has-in`);
};
export const refresh_token = (id) => {
  return axios.post(`/auth/refresh`);
};
export default uploadImage;
export { APIUploadImage };
export const createComment = (taskId, requestData, type) => {
  return axios.post("/comment", {
    ...requestData,
    type_comment: type,
    post_id: taskId,
  });
};
