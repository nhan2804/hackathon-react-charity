import { useQuery } from "react-query";
import { fetchTask } from "../services";

const useGetTask = (id) => {
  return useQuery(["task", id], async () => {
    const { data } = await fetchTask(id);

    return data;
  });
};

export default useGetTask;
