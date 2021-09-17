import React, { useEffect, useMemo } from "react";
import { Form, Input, Button, Upload, Select } from "antd";
import useGetTaskUnAsign from "@modules/task/hooks/useGetTaskUnAsign";
import { useParams } from "react-router";
import useAssignProject from "@modules/project/hooks/useAssignProject";
import useResponse from "@hooks/useResponse";
import useGetStaff from "@modules/project/hooks/useGetStaff";
const { Option } = Select;
const AssignStaffForTaskSectionForm = ({ id_task }) => {
  const { projectId } = useParams();
  const { form } = Form.useForm();
  const res = useResponse();
  const { mutate: assign, isLoading } = useAssignProject(projectId);
  const onFinish = (values) => {
    console.log(values);

    assign({ ...values, id_task: [id_task] }, res);
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
  const { data: staff } = useGetStaff(projectId);
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
      <Form.Item
        name="id_user"
        label="Hoặc chọn nhân viên có sẵn"
        className="w-full"
      >
        <Select
          className="w-full"
          showSearch
          // style={{ width: 200 }}
          placeholder="Chọn nhân viên có sẵn"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {staff?.map((e) => {
            return (
              <Option key={e?.id} value={e?.username}>
                {e?.username}
              </Option>
            );
          })}
        </Select>
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

export default AssignStaffForTaskSectionForm;
