import React from "react";
import { Form, Input, Button, DatePicker } from "antd";
import useCreateTask from "@modules/task/hooks/useCreateTask";
import { useParams } from "react-router";
const { RangePicker } = DatePicker;
const CreateTaskForm = () => {
  let { id } = useParams();
  const { mutate: create, isLoading } = useCreateTask();
  const onFinish = (values) => {
    const time_start = values?.time?.[0].format("YYYY-MM-DD");
    const time_end = values?.time?.[1].format("YYYY-MM-DD");

    create({ ...values, time_start, time_end, project_id: id });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      className="w-full"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Tên công viêc"
        name="name_task"
        rules={[
          {
            required: true,
            message: "Bạn cần nhập tên dự án",
          },
        ]}
      >
        <Input
          placeholder="Tên dự án"
          //   prefix={<UserOutlined className="site-form-item-icon" />}
          //   suffix={
          //     <Tooltip title="Extra information">
          //       <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
          //     </Tooltip>
          //   }
        />
      </Form.Item>

      <Form.Item
        label="Miêu tả"
        name="desc_task"
        rules={[
          {
            required: true,
            message: "Bạn cần nhập miêu tả công viêc",
          },
        ]}
      >
        <Input
          placeholder="Mô tả dự án"
          //   prefix={<LockOutlined className="site-form-item-icon" />}
          //   suffix={
          //     <Tooltip title="Extra information">
          //       <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
          //     </Tooltip>
          //   }
        />
      </Form.Item>
      <Form.Item
        label="Ngày bắt đầu & Kết túc"
        name="time"
        rules={[
          {
            required: true,
            message: "Bạn cần nhập miêu tả công viêc",
          },
        ]}
      >
        <RangePicker />
      </Form.Item>

      <Form.Item>
        <div className="flex justify-end">
          <Button
            type="primary"
            htmlType="submit"
            className="!font-semibold"
            loading={isLoading}
          >
            Tạo công viêc
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default CreateTaskForm;
