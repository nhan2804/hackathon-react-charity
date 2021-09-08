import { useMutation, useQueryClient } from "react-query";
import { createTaskComment } from "../services";

const useCreateComment = (id) => {
  const qc = useQueryClient();
  return useMutation(
    async (requestData) => {
      const { data } = await createTaskComment(id, requestData);
      return data;
    },
    {
      onSuccess: () => {
        qc.invalidateQueries(["taskComment", id]);
      },
    }
  );
};

export default useCreateComment;
