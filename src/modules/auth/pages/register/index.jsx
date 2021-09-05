import React from "react";
import { Form, Input, Button, Checkbox, Tooltip } from "antd";

import {
  InfoCircleOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
const Register = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
    alert(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
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
        <Form.Item label="Họ và tên" name="name">
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
        <Form.Item label="Số điện thoại" name="phone">
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
        <Form.Item label="Email" name="email">
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
          label="Tên tài khoản"
          name="username"
          rules={[
            {
              required: true,
              message: "Bạn cần nhập tên tài khoản",
            },
          ]}
        >
          <Input
            placeholder="Tên tài khoản"
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
              message: "Bạn cần hập lại mật khẩu",
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
            <Button type="primary" htmlType="submit" className="!font-semibold">
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
