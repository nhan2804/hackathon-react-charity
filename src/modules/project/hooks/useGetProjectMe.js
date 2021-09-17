import { useQuery } from "react-query";
import { fetchProjectMe } from "../services";

const useGetProjectMe = () => {
  return useQuery(["project-me"], async () => {
    const { data } = await fetchProjectMe();
    return data;
  });
};

export default useGetProjectMe;
