import { Avatar, Button, Input, Form } from "antd";

import React from "react";
import { UserOutlined } from "@ant-design/icons";
import useCreateComment from "@modules/task/hooks/useCreateComment";
const CreateCommentForm = ({ taskId }) => {
  const { mutate: create, isLoading } = useCreateComment(taskId);
  const onSubmit = (data) => {
    create(data);
  };
  return (
    <Form className="flex space-x-2" onFinish={onSubmit}>
      <Avatar icon={<UserOutlined />} className="flex-shrink-0" />
      <Form.Item
        name="desc_comment"
        rules={[
          { required: true, message: "Bạn phải nhập nội dung bình luận" },
        ]}
      >
        <Input placeholder="Bình luận ..." />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Bình luận
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateCommentForm;
