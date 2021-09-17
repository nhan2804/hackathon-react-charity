import React from "react";
import { useQuery } from "react-query";
import { getRole } from "@services/index";
import { useHistory } from "react-router";
const usePermission = (id) => {
  const history = useHistory();
  return useQuery(
    ["permission", id],
    async () => {
      const { data } = await getRole(id);
      return data;
    },
    {
      onError: (e) => {
        if (e?.response?.status === 403) {
          history.push("/not-found");
        }
      },
    }
  );
};

export default usePermission;
