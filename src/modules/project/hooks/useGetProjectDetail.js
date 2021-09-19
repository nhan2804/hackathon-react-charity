import { useQuery } from "react-query";
import { getProjectDetail } from "../services";

const useGetProjectDetail = (id) => {
  return useQuery(["project-detail", id], async () => {
    const { data } = await getProjectDetail(id);

    return data;
  });
};

export default useGetProjectDetail;
