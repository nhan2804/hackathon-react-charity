import { useQuery } from "react-query";
import { fetchProject } from "../services";

const useGetProject = () => {
  return useQuery(["project"], async () => {
    const { data } = await fetchProject();
    console.log(data);
    return data;
  });
};

export default useGetProject;
