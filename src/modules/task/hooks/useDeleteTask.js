import { useMutation, useQueryClient } from "react-query";
import { deleteTask } from "../services";
import { useHistory } from "react-router-dom";
const useDeleteTask = (projectId, taskId) => {
  const qc = useQueryClient();
  const history = useHistory();
  return useMutation(
    async () => {
      const { data } = await deleteTask(taskId);
      return data;
    },
    {
      //   onMutate: (param) => {
      //     qc.cancelMutations(["taskTodo", taskId]);
      //     const oldData = qc.getQueryData(["taskTodo", taskId]);
      //     const newData = oldData?.filter((todo) => {
      //       return todo?.id_todo !== param?.id_todo;
      //     });
      //     qc.setQueryData(["taskTodo", taskId], newData);
      //     return { oldData };
      //   },
      //   onError: (err, newTodo, context) => {
      //     qc.setQueryData(["taskTodo", taskId], context?.oldData);
      //   },
      onSuccess: async () => {
        await qc.refetchQueries(["task-detail", taskId]);
        history.push(`/project/${projectId}/tasks`);
      },
    }
  );
};

export default useDeleteTask;
