import { useMutation, useQueryClient } from "react-query";
import { createFeedBackComment } from "../services";

const useCreateCommentFeedBack = (id) => {
  const qc = useQueryClient();
  return useMutation(
    async (requestData) => {
      const { data } = await createFeedBackComment(id, requestData);
      return data;
    },
    {
      onSuccess: () => {
        qc.invalidateQueries(["feedbackComment", id]);
      },
    }
  );
};

export default useCreateCommentFeedBack;
