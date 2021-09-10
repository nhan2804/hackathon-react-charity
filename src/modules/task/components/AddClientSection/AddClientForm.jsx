import useAddClient from "@modules/project/hooks/useAddClient";
import { Input, Form, Button } from "antd";
import React from "react";
import { useParams } from "react-router";

const AddClientForm = ({ close }) => {
  const { projectId } = useParams();
  const { form } = Form.useForm();
  const { mutate: assign, isLoading } = useAddClient(projectId);
  const onFinish = (values) => {
    console.log(values);
    assign(values, { onSuccess: close });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      form={form}
      className="w-full"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username nhân viên"
        name="username"
        rules={[
          {
            required: true,
            message: "Bạn cần nhập username nhân viên",
          },
        ]}
      >
        <Input
          placeholder="nhập Username"
          //   prefix={<UserOutlined className="site-form-item-icon" />}
          //   suffix={
          //     <Tooltip title="Extra information">
          //       <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
          //     </Tooltip>
          //   }
        />
      </Form.Item>
      <Form.Item>
        <div className="flex justify-end">
          <Button
            type="primary"
            htmlType="submit"
            className="!font-semibold"
            loading={isLoading}
          >
            Thêm khách hàng
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default AddClientForm;
