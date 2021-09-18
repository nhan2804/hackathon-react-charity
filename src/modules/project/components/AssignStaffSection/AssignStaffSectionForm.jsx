import React from "react";
import { Form, Input, Button, Select, Divider } from "antd";

import useGetTaskUnAsign from "@modules/task/hooks/useGetTaskUnAsign";
import { useParams } from "react-router";
import useAssignProject from "@modules/project/hooks/useAssignProject";
import useGetStaff from "@modules/project/hooks/useGetStaff";
import { useQueryClient } from "react-query";
import { toast } from "react-toastify";
const { Option } = Select;
const AssignStaffSectionForm = () => {
  const { projectId } = useParams();
  const { form } = Form.useForm();

  const qc = useQueryClient();
  const { mutate: assign, isLoading } = useAssignProject(projectId);
  const onFinish = (values) => {
    assign(values, {
      onSuccess: (d) => {
        qc.invalidateQueries(["project-task", projectId?.toString()]);
        toast.success(d?.message);
      },
      onError: (e) => {
        // toast.error(e?.response?.data?.message);
      },
    });
  };

  const onFinishFailed = (errorInfo) => {};
  const { data: tasksUnsign } = useGetTaskUnAsign(projectId);
  //

  function handleChange(value) {
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
      <Form.Item label="Username nhân viên" name="username">
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
      <Divider orientation="center">Hoặc</Divider>
      <Form.Item
        name="id_user"
        label="Chọn nhân viên có sẵn"
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
            <Option>-----Chọn nhân viên------</Option>;
            return (
              <Option key={e?.id} value={e?.id}>
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

export default AssignStaffSectionForm;
