import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { assignProject } from "../services";

const useAssignProject = (id) => {
  // const qc = useQueryClient();
  return useMutation(
    async (requestData) => {
      const { data } = await assignProject(id, requestData);
      return data;
    },
    {
      onSuccess: (data, param) => {
        // toast.success(data?.message);
      },
    }
  );
};

export default useAssignProject;
