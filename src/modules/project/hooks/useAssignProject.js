import { useMutation, useQueryClient } from "react-query";
import { assignProject } from "../services";

const useAssignProject = (id) => {
  const qc = useQueryClient();
  return useMutation(
    async (requestData) => {
      const { data } = await assignProject(id, requestData);
      return data;
    },
    {
      onSuccess: (data, param) => {
        qc.invalidateQueries(["project-task", id?.toString()]);
      },
    }
  );
};

export default useAssignProject;
