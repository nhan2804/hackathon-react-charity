import useGetTaskPermission from "@modules/task/hooks/useGetTaskPermisson";
import { List, Skeleton } from "antd";

import React from "react";
import TodoItem from "./TodoItem";

const ListTodo = ({ taskId, data, projectId, isLoading }) => {
  const { data: permission } = useGetTaskPermission(projectId, taskId);
  return (
    <>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <div
          style={{ maxHeight: "200px" }}
          className="min-h-full h-100  overflow-y-auto"
        >
          <List
            dataSource={data}
            itemLayout="horizontal"
            renderItem={(item) => (
              <List.Item>
                <TodoItem
                  item={item?.name_todo}
                  checked={item?.status_todo === "CHECKED"}
                  desc={item?.desc_todo}
                  projectId={projectId}
                  canDone={permission?.task?.can_done}
                  {...item}
                />
              </List.Item>
            )}
          />
        </div>
      )}
    </>
  );
};

export default ListTodo;
