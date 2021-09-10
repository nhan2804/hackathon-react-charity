import React, { useEffect, useMemo } from "react";
import { Form, Input, Button, Upload, Select } from "antd";

import { UploadOutlined } from "@ant-design/icons";
import useCreateProject from "@modules/project/hooks/useCreateProject";
import useGetTaskUnAsign from "@modules/task/hooks/useGetTaskUnAsign";
import { useParams } from "react-router";
import useAssignProject from "@modules/project/hooks/useAssignProject";
const { Option } = Select;
const AssignStaffSectionForm = () => {
  const { projectId } = useParams();
  const { form } = Form.useForm();
  const { mutate: assign, isLoading } = useAssignProject(projectId);
  const onFinish = (values) => {
    console.log(values);
    const thumb_project =
      values?.thumbnail_project?.[0]?.response?.data?.thumb?.url;
      assign(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const { data: tasksUnsign } = useGetTaskUnAsign(projectId);
  // console.log(tasksUnsign);

  function handleChange(value) {
    console.log(`selected ${value}`);
    form.setFieldsValue(value);
  }
  

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
      <Form.Item name="id_task" label="Danh sách công việc">
        <Select
          mode="multiple"
          allowClear
          rules={[
            {
              required: true,
              message: "Bạn cần chọn ít nhất 1 công việc",
            },
          ]}
          style={{ width: "100%" }}
          placeholder="Chọn hoặc tìm kiếm"
          onChange={handleChange}
        >
          {tasksUnsign?.map((e, i) => {
            return <Option key={e?.id_task}>{e?.name_task}</Option>;
          })}
        </Select>
      </Form.Item>
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
            Thêm nhân viên
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};

export default AssignStaffSectionForm;
