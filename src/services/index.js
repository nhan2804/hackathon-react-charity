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
export default uploadImage;
export { APIUploadImage };
