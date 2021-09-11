import { useQuery } from "react-query";
import { fetchProjectShared } from "../services";

const useGetProjectShared = () => {
  return useQuery(["project-shared"], async () => {
    const { data } = await fetchProjectShared();
    return data;
  });
};

export default useGetProjectShared;
