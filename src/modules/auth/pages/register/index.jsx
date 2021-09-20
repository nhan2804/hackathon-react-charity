import React from "react";
import { Form, Input, Button, Tooltip } from "antd";

import {
  InfoCircleOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import useRegister from "@modules/auth/hooks/useRegister";
const Register = () => {
  const { mutate: register, isLoading } = useRegister();
  const onFinish = (values) => {
    register(values);
  };

  const onFinishFailed = (errorInfo) => {};
  return (
    <div className="flex items-center h-full">
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        className="max-w-sm !m-auto !p-2 w-full"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="text-2xl font-bold text-center">Đăng ký</div>
        <Form.Item label="Họ và tên" name="fullname">
          <Input
            placeholder="Họ và tên"
            prefix={<UserOutlined className="site-form-item-icon" />}
            suffix={
              <Tooltip title="Extra information">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
        </Form.Item>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: "Bạn cần nhập số điện thoại",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (value.match(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g)) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error(
                    "Số điện thoại không đúng định dạng, vui lòng thử lại!"
                  )
                );
              },
            }),
          ]}
          label="Số điện thoại"
        >
          <Input
            placeholder="Số điện thoại"
            prefix={<UserOutlined className="site-form-item-icon" />}
            suffix={
              <Tooltip title="Extra information">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              type: "email",
              message: "Email không chính xác",
            },
            {
              required: true,
              message: "Bạn cần nhập email",
            },
          ]}
          label="Email"
          name="email"
        >
          <Input
            placeholder="Email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            suffix={
              <Tooltip title="Extra information">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[
            {
              required: true,
              message: "Bạn cần nhập mật khẩu",
            },
          ]}
        >
          <Input.Password
            placeholder="Mật khẩu"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>
        <Form.Item
          label="Nhập lại mật khẩu"
          name="rePassword"
          rules={[
            {
              required: true,
              message: "Bạn cần nhập lại mật khẩu",
            },
          ]}
        >
          <Input.Password
            placeholder="Nhập lại mật khẩu"
            prefix={<LockOutlined className="site-form-item-icon" />}
          />
        </Form.Item>

        <Form.Item>
          <div className="flex justify-center">
            <Button
              loading={isLoading}
              type="primary"
              htmlType="submit"
              className="!font-semibold"
            >
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
