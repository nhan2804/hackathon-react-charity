import { useQuery } from "react-query";
import { getClient } from "../services";

const useGetClient = (id) => {
  return useQuery(["projectClient", id], async () => {
    const { data } = await getClient(id);
    return data;
  });
};

export default useGetClient;
