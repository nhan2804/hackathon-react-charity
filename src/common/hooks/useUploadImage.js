import uploadImage from "@services/";
import { useMutation } from "react-query";
const useUploadImage = () => {
  return useMutation(
    async (requestData) => {
      
      const { data } = await uploadImage(requestData);
      return data;
    },
    {
      onSuccess: () => {
       
      },
    }
  );
};

export  {useUploadImage};
