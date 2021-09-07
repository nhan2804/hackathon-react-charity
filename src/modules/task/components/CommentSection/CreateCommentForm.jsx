import { Avatar, Button, Input } from "antd";

import React from "react";
import { UserOutlined } from "@ant-design/icons";
const CreateCommentForm = () => {
  return (
    <div className="flex space-x-2">
      <Avatar icon={<UserOutlined />} className="flex-shrink-0" />
      <Input placeholder="Bình luận ..." />
      <Button type="primary">Bình luận</Button>
    </div>
  );
};

export default CreateCommentForm;
