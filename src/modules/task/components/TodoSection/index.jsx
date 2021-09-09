import { Divider, Progress } from "antd";
import React from "react";
import CreateTodoForm from "./CreateTodoForm";
import ListTodo from "./ListTodo";

const TodoSection = ({ taskId }) => {
  return (
    <div>
      <Progress percent={30} />
      <Divider orientation="left">Danh sách công việc</Divider>
      <ListTodo taskId={taskId} />
      <CreateTodoForm taskId={taskId} />
    </div>
  );
};

export default TodoSection;
