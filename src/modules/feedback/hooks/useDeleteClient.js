import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { addClient, deleteClient } from "../services";

const useDeleteClient = (projectId) => {
  const qc = useQueryClient();
  return useMutation(
    async (clientId) => {
      const { data } = await deleteClient(projectId, clientId);
      return data;
    },
    {
      onSuccess: (data) => {
        toast.success(data?.message);
        qc.invalidateQueries(["projectClient", projectId?.toString()]);
      },
      onError: (e) => {},
    }
  );
};

export default useDeleteClient;
