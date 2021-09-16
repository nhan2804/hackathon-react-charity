import { useQuery } from "react-query";
import { getStaff } from "../services";

const useGetStaff = (id) => {
  return useQuery(["staff-project"], async () => {
    const { data } = await getStaff(id);

    return data;
  });
};

export default useGetStaff;
