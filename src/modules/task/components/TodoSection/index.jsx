import { Divider } from "antd";
import React from "react";
import CreateTodoForm from "./CreateTodoForm";
import ListTodo from "./ListTodo";

const TodoSection = () => {
  return (
    <div>
      <Divider orientation="left">Danh sách công việc</Divider>
      <ListTodo />
      <CreateTodoForm />
    </div>
  );
};

export default TodoSection;
