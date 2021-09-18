import { useQuery } from "react-query";
import { fetchTaskUnsign } from "../services";

const useGetTaskUnAsign = (id) => {
  return useQuery(["task-unsign", id], async () => {
    const { data } = await fetchTaskUnsign(id);
    return data;
  });
};

export default useGetTaskUnAsign;
