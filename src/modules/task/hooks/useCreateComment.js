import { createComment } from "@services/";
import { useMutation, useQueryClient } from "react-query";

const useCreateComment = (id, type) => {
  const qc = useQueryClient();
  return useMutation(
    async (requestData) => {
      const { data } = await createComment(id, requestData, type);
      return data;
    },
    {
      onSuccess: () => {
        if (type === "TASK") {
          qc.invalidateQueries(["taskComment", id]);
        } else {
          qc.invalidateQueries(["feedbackComment", id]);
        }
      },
    }
  );
};

export default useCreateComment;
