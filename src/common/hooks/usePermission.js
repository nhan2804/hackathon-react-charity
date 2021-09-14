import React from "react";
import { useQuery } from "react-query";
import { getRole } from "@services/index";
const usePermission = (id) => {
  return useQuery(["permission", id], async () => {
    const { data } = await getRole(id);
    return data;
  });
};

export default usePermission;
