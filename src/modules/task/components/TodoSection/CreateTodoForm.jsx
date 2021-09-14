import usePermission from "@hooks/usePermission";
import useCreateTodo from "@modules/task/hooks/useCreateTodo";
import { Button, Input, Form } from "antd";
import React from "react";

const CreateTodoForm = ({ taskId, projectId }) => {
  const { mutate: create, isLoading } = useCreateTodo(taskId);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
    create(values);
    form.resetFields();
  };
  const { data } = usePermission(projectId, taskId);
  return data?.todo?.can_create ? (
    <div className="flex">
      <Form form={form} className="flex-grow" onFinish={onFinish}>
        <Form.Item
          name="name_todo"
          rules={[{ required: true, message: "Bạn cần nhập tên todo" }]}
        >
          <Input placeholder="Thêm todo" />
        </Form.Item>
        <Form.Item name="desc_todo">
          <Input.TextArea placeholder="Mô tả" />
        </Form.Item>
        <Form.Item>
          <div className="flex justify-end">
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Thêm
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  ) : null;
};

export default CreateTodoForm;
