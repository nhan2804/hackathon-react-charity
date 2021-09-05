import { useMutation, useQueryClient } from "react-query";
import { createProject } from "../services";

const useCreateProject = () => {
  const qc = useQueryClient();
  return useMutation(
    async (requestData) => {
      const { data } = await createProject(requestData);
      return data;
    },
    {
      onSuccess: () => {
        qc.invalidateQueries(["project"]);
      },
    }
  );
};

export default useCreateProject;
