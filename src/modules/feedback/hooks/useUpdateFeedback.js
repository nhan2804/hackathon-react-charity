import { useMutation, useQueryClient } from "react-query";
import { updateFeedback } from "../services";

const useUpdateFeedBack = (projectId, id) => {
  const qc = useQueryClient();
  return useMutation(
    async (requestData) => {
      const { data } = await updateFeedback(projectId, id, requestData);
      return data;
    },
    {
      onSuccess: () => {
        qc.invalidateQueries(["project-feedback", projectId?.toString()]);
      },
    }
  );
};

export default useUpdateFeedBack;
