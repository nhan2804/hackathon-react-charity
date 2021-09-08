import { useMutation, useQueryClient } from "react-query";
import { createTodo } from "../services";

const useCreateTodo = (taskId) => {
  const qc = useQueryClient();
  return useMutation(
    async (requestData) => {
      const { data } = await createTodo(taskId, requestData);
      return data;
    },
    {
      onSuccess: () => {
        qc.invalidateQueries(["taskTodo", taskId]);
      },
    }
  );
};

export default useCreateTodo;
