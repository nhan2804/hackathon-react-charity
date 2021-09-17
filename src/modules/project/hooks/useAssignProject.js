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
      onSuccess: () => {
        qc.invalidateQueries(["project-task", id]);
      },
    }
  );
};

export default useAssignProject;
