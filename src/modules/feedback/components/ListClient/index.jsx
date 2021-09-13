import useGetClient from "@modules/feedback/hooks/useGetClient";
import { Avatar } from "antd";
import React from "react";

const ListClient = ({ projectId }) => {
  const { data } = useGetClient(projectId);
  return (
    <div className="inline-block">
      <Avatar.Group className="!-space-x-3" maxCount={6}>
        {data?.map((user) => (
          <Avatar src={user?.avatar} key={user?.id} className="first:!m-0" />
        ))}
      </Avatar.Group>
    </div>
  );
};

export default ListClient;
