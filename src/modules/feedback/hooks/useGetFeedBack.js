import { useQuery } from "react-query";
import { fetchFeedback } from "../services";

const useGetFeedBack = (id) => {
  return useQuery(["project-feedback", id], async () => {
    const { data } = await fetchFeedback(id);
    return data;
  });
};

export default useGetFeedBack;
