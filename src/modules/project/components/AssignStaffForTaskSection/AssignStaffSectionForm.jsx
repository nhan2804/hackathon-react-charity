import React from "react";
import { Form, Input, Button, Select, Divider } from "antd";
import { useParams } from "react-router";
import useAssignProject from "@modules/project/hooks/useAssignProject";
import useGetStaff from "@modules/project/hooks/useGetStaff";
import { useQueryClient } from "react-query";
const { Option } = Select;
const AssignStaffForTaskSectionForm = ({ id_task }) => {
  const qc = useQueryClient();
  const { projectId } = useParams();
  const [form] = Form.useForm();

  const { mutate: assign, isLoading } = useAssignProject(projectId);
  const onFinish = (values) => {
    assign(
      { ...values, id_task: [id_task] },
      {
        onSuccess: () => {
          qc.invalidateQueries(["task-detail", id_task]);
        },
      }
    );
  };

  const onFinishFailed = (errorInfo) => {};

  //

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
          <Option>-----Chọn nhân viên------</Option>
          {staff?.map((e) => {
            return (
              <>
                <Option key={e?.id} value={e?.id}>
                  {e?.username}
                </Option>
              </>
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
