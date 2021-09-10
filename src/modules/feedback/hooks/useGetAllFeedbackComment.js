import { useQuery } from "react-query";
import { getAllFeedbackComment } from "../services";

const useGetAllFeedbackComment = (projectId, feedbackId) => {
  return useQuery(["feedbackComment", feedbackId], async () => {
    const { data } = await getAllFeedbackComment(projectId, feedbackId);
    return data;
  });
};

export default useGetAllFeedbackComment;
