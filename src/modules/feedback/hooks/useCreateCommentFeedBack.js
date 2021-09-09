import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router";
import { createFeedBackComment } from "../services";

const useCreateCommentFeedBack = (id) => {
  const qc = useQueryClient();
  const {projectId}=useParams();
  return useMutation(
    async (requestData) => {
      const { data } = await createFeedBackComment(id, requestData);
      return data;
    },
    {
      onSuccess: () => {
        qc.invalidateQueries(["feedbackComment", projectId]);
      },
    }
  );
};

export default useCreateCommentFeedBack;
