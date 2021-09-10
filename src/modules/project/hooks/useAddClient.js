import { useMutation, useQueryClient } from "react-query";
import { addClient } from "../services";

const useAddClient = (id) => {
  const qc = useQueryClient();
  return useMutation(
    async (requestData) => {
      const { data } = await addClient(id, requestData);
      return data;
    },
    {
      onSuccess: () => {
        qc.invalidateQueries(["projectClient", id]);
      },
    }
  );
};

export default useAddClient;
