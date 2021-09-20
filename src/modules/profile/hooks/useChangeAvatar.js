import { useMutation, useQueryClient } from "react-query";
import { changeAvatar } from "../services/index";
const useChangeAvatar = () => {
  const qc = useQueryClient();
  return useMutation(
    async (link) => {
      const { data } = changeAvatar(link);
      return data;
    },
    {
      onSettled: () => {
        qc.invalidateQueries("userProfile");
      },
    }
  );
};

export default useChangeAvatar;
