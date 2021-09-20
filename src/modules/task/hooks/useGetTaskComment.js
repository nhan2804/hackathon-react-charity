import { useQuery } from "react-query";
import { fetchComment } from "../services";

const useGetTaskComment = (id) => {
  return useQuery(["taskComment", id], async () => {
    const { data } = await fetchComment(id);
    return data;
  });
};

export default useGetTaskComment;
