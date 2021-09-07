import { Button, Input } from "antd";
import React from "react";

const CreateTodoForm = () => {
  return (
    <div className="flex space-x-2">
      <div className="flex-grow space-y-2">
        <Input placeholder="Thêm todo" />
        <Input.TextArea placeholder="Mô tả" />
      </div>

      <Button type="primary">Thêm</Button>
    </div>
  );
};

export default CreateTodoForm;
