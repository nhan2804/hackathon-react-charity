import { Form, Input, Button, Checkbox, Tooltip } from "antd";
import React from "react";
import {
  InfoCircleOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import useLogin from "@modules/auth/hooks/useLogin";
const Login = () => {
  const { mutate: login, isLoading } = useLogin();
  const onFinish = (values) => {
    login(values);
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
        <div className="text-2xl font-bold text-center">Đăng nhập</div>
        <Form.Item
          label="Tên tài khoản"
          name="email"
          rules={[
            {
              required: true,
              message: "Bạn cần nhập tên tài khoản",
            },
          ]}
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
          label="Password"
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
            suffix={
              <Tooltip title="Extra information">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Ghi nhớ đăng nhập</Checkbox>
        </Form.Item>

        <Form.Item>
          <div className="flex justify-center">
            <Button
              type="primary"
              htmlType="submit"
              className="!font-semibold"
              loading={isLoading}
            >
              Đăng nhập
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
