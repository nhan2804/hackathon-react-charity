import { useQuery } from "react-query";
import { fetchTodo } from "../services";

const useGetTodo = (id) => {
  return useQuery(["taskTodo", id], async () => {
    const { data } = await fetchTodo(id);
    return data;
  });
};

export default useGetTodo;
