import useGetTodo from "@modules/task/hooks/useGetTodo";
import { List } from "antd";

import React from "react";
import TodoItem from "./TodoItem";

const ListTodo = ({ taskId }) => {
  const { data } = useGetTodo(taskId);
  return (
    <List
      dataSource={data}
      itemLayout="horizontal"
      renderItem={(item) => (
        <List.Item>
          <TodoItem
            item={item?.name_todo}
            checked={item?.status_to === "CHECKED"}
            desc={item?.desc_todo}
            {...item}
          />
        </List.Item>
      )}
    />
  );
};

export default ListTodo;
