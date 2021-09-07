import { List } from "antd";

import React from "react";
import TodoItem from "./TodoItem";

const ListTodo = () => {
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];
  return (
    <List
      dataSource={data}
      itemLayout="horizontal"
      renderItem={(item) => (
        <List.Item>
          <TodoItem item={item} />
        </List.Item>
      )}
    />
  );
};

export default ListTodo;
