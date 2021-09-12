import { useMutation, useQueryClient } from "react-query";
import { deleteTodo } from "../services";

const useDeleteTodo = (taskId) => {
  const qc = useQueryClient();
  return useMutation(
    async ({ id_todo }) => {
      const { data } = await deleteTodo(id_todo);
      return data;
    },
    {
      onMutate: (param) => {
        qc.cancelMutations(["taskTodo", taskId]);
        const oldData = qc.getQueryData(["taskTodo", taskId]);
        const newData = oldData?.filter((todo) => {
          return todo?.id_todo !== param?.id_todo;
        });
        qc.setQueryData(["taskTodo", taskId], newData);
        return { oldData };
      },
      onError: (err, newTodo, context) => {
        qc.setQueryData(["taskTodo", taskId], context?.oldData);
      },
      onSettled: () => {
        // qc.invalidateQueries(["taskTodo", taskId?.toString()]);
      },
    }
  );
};

export default useDeleteTodo;
