import React from "react";
import { Form, Input, Button, Checkbox, Tooltip, Upload } from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import useCreateProject from "@modules/project/hooks/useCreateProject";
const CreateProjectForm = () => {
  const { mutate: create, isLoading } = useCreateProject();
  const onFinish = (values) => {
    console.log("Success:", values);
    const thumbnail_project =
      values?.thumbnail?.[0]?.response?.data?.display_url;

    create({ ...values, thumbnail_project });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
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
        name="thumbnail_project"
        label="Ảnh bìa"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload
          name="image"
          action="https://api.imgbb.com/1/upload?key=d896df32002ac664b0d89df95bcb46f4"
          maxCount={1}
          listType="picture"
        >
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item
        label="Tên dự án"
        name="name_project"
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
        name="desc_project"
        rules={[
          {
            required: true,
            message: "Bạn cần nhập miêu tả dự án",
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

      <Form.Item>
        <div className="flex justify-end">
          <Button
            type="primary"
            htmlType="submit"
            className="!font-semibold"
            loading={isLoading}
          >
            Tạo dự án
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default CreateProjectForm;
