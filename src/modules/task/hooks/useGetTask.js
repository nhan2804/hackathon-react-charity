import { useQuery } from "react-query";
import { task_repo } from "../repositories/task_repo";
import { fetchTask } from "../services";

const useGetTask = (id) => {
  return useQuery(["project-task", id], async () => {
    const { data } = await fetchTask(id);

    return { data, task_repo: task_repo(data) };
  });
};

export default useGetTask;
