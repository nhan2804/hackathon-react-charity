import React from "react";
import { useMutation } from "react-query";
import { createProject } from "../services";

const useCreateProject = () => {
  return useMutation(async (requestData) => {
    const { data } = await createProject(requestData);
    return data;
  });
};

export default useCreateProject;
