import { useMutation, useQueryClient } from "react-query";
import { createFeedback } from "../services";

const useCreateFeedBack = () => {
  const qc = useQueryClient();
  return useMutation(
    async (requestData) => {
      const { data } = await createFeedback(requestData);
      return data;
    },
    {
      onSuccess: () => {
        qc.invalidateQueries(["feedback"]);
      },
    }
  );
};

export default useCreateFeedBack;
