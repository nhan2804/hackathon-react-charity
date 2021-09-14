import { useQuery } from "react-query";
import { getTaskPermission } from "../services";

const useGetTaskPermission = (idProject, idTask) => {
  return useQuery(["taskPermission", idTask], async () => {
    const { data } = await getTaskPermission(idProject, idTask);
    return data;
  });
};

export default useGetTaskPermission;
