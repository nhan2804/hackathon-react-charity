import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { updateProfile } from "../services/index";
const useUpdateProfile = () => {
  const qc = useQueryClient();
  return useMutation(
    async (formData) => {
      const { data } = await updateProfile(formData);
      return data;
    },
    {
      onSettled: () => {
        qc.invalidateQueries("userProfile");
      },
    }
  );
};

export default useUpdateProfile;
