import { useQuery } from "react-query";
import {  showTask } from "../services";

const useShowTask = (id) => {
  return useQuery(["task-detail", id], async () => {
    const { data } = await showTask(id);
    return data;
  });
};

export default useShowTask;
