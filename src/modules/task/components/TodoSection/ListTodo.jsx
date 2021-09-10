import useGetTodo from "@modules/task/hooks/useGetTodo";
import { List } from "antd";

import React from "react";
import TodoItem from "./TodoItem";

const ListTodo = ({ taskId,data }) => {
  return (
    <List
      dataSource={data}
      itemLayout="horizontal"
      renderItem={(item) => (
        <List.Item>
          <TodoItem
            item={item?.name_todo}
            checked={item?.status_todo === "CHECKED"}
            desc={item?.desc_todo}
            {...item}
          />
        </List.Item>
      )}
    />
  );
};

export default ListTodo;
