import { useMutation, useQueryClient } from "react-query";
import { doneTodo } from "../services";

const useDoneTodo = (projectId, taskId) => {
  const qc = useQueryClient();
  return useMutation(
    async (requestData) => {
      const { data } = await doneTodo({
        projectId,
        taskId,
        data: requestData,
      });
      return data;
    },
    {
      onMutate: (param) => {
        qc.cancelMutations(["taskTodo", taskId]);
        const oldData = qc.getQueryData(["taskTodo", taskId]);
        const newData = oldData?.map((todo) => {
          if (todo?.id_todo === param?.id_todo)
            return { ...todo, status_todo: "CHECKED" };
          return todo;
        });
        qc.setQueryData(["taskTodo", taskId], newData);
        return { oldData };
      },
      onError: (err, newTodo, context) => {
        qc.setQueryData(["taskTodo", taskId], context?.oldData);
      },
      onSettled: () => {
        qc.invalidateQueries(["taskTodo", taskId?.toString()]);
      },
    }
  );
};

export default useDoneTodo;
