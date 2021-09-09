import { useQuery } from "react-query";
import { task_repo } from "../repositories/task_repo";
import { fetchTask } from "../services";

const useGetTask = (id) => {
  return useQuery(["task", id], async () => {
    const { data } = await fetchTask(id);

    return task_repo(data);
  });
};

export default useGetTask;
