import axios from "axios";

export const changeAvatar = (link) => {
  return axios.post("/auth/change-avatar", { avatar: link });
};

export const updateProfile = (data) => {
  return axios.post("/auth/user-profile", data);
};
