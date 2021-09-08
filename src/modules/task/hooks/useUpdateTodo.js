import { useMutation, useQueryClient } from "react-query";
import { updateTodo } from "../services";

const useUpdateTodo = (todoId, taskId) => {
  const qc = useQueryClient();
  return useMutation(
    async (requestData) => {
      const { data } = await updateTodo(todoId, requestData);
      return data;
    },
    {
      onSuccess: () => {
        qc.invalidateQueries(["taskTodo", taskId?.toString()]);
      },
    }
  );
};

export default useUpdateTodo;
