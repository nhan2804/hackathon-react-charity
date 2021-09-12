import { Avatar, Button, Input, Form } from "antd";

import React from "react";
import { UserOutlined } from "@ant-design/icons";
import useCreateComment from "@modules/task/hooks/useCreateComment";
import { useAppSelector } from "@hooks/reduxHook";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import RichText from "@components/RichText";
const CreateCommentForm = ({ taskId }) => {
  const [form] = Form.useForm();
  const { mutate: create, isLoading } = useCreateComment(taskId);
  const onSubmit = (data) => {
    console.log(data);
    // return;
    create(data);
    form.resetFields();
  };

  const user = useAppSelector((state) => state?.auth?.user);
  return (
    <Form form={form} className="flex space-x-2" onFinish={onSubmit}>
      <Avatar
        src={user?.avatar}
        icon={<UserOutlined />}
        className="flex-shrink-0"
      />
      <Form.Item
        name="desc_comment"
        className="flex-grow"
        rules={[
          { required: true, message: "Bạn phải nhập nội dung bình luận" },
        ]}
      >
         <RichText onChangeValue={(data)=>form.setFieldsValue({desc_comment:data})} />
        {/* <Input placeholder="Bình luận ..." /> */}
      </Form.Item>
      <div>
   
   
  </div>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Bình luận
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateCommentForm;
