import { useMutation, useQueryClient } from "react-query";
import { createFeedback } from "../services";

const useCreateFeedBack = (id) => {
  const qc = useQueryClient();
  return useMutation(
    async (requestData) => {
      const { data } = await createFeedback(requestData);
      return data;
    },
    {
      onSuccess: () => {
        qc.invalidateQueries(["project-feedback", id?.toString()]);
      },
    }
  );
};

export default useCreateFeedBack;
