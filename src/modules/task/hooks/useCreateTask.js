import { useMutation, useQueryClient } from "react-query";
import { createTask } from "../services";

const useCreateTask = () => {
  const qc = useQueryClient();
  return useMutation(
    async (requestData) => {
      const { data } = await createTask(requestData);
      return data;
    },
    {
      onSuccess: () => {
        qc.invalidateQueries(["project-task"]);
      },
    }
  );
};

export default useCreateTask;
