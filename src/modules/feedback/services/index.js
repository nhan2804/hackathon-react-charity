import axios from "axios"

const fetchFeedback=(id)=>{
    return axios.get(`project/${id}/feedbacks`);
}
const createFeedback=(formData)=>{
    return axios.post(`feedback`,formData);
}
export const createFeedBackComment = (fbId, requestData) => {
    return axios.post("/comment", {
      ...requestData,
      type_comment: "FEEDBACK",
      post_id: fbId,
    });
  };
export {fetchFeedback,createFeedback}