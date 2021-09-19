import { useMutation, useQueryClient } from "react-query";
import { updateTask } from "../services";

const useUpdateTask = (projectId, id) => {
  const qc = useQueryClient();
  return useMutation(
    async (requestData) => {
      const { data } = await updateTask(id, requestData);
      return data;
    },
    {
      onSuccess: () => {
        qc.invalidateQueries(["task-detail", id?.toString()]);
        qc.invalidateQueries(["project-task", projectId?.toString()]);
      },
    }
  );
};

export default useUpdateTask;
