import { Button, Form, Input, DatePicker } from "antd";
import moment from "moment";
import React from "react";
import useUpdateTask from "../../hooks/useUpdateTask";
const UpdateTaskForm = ({
  close,
  name_task,
  desc_task,
  time_start,
  time_end,
  id_task,
}) => {
  const { mutate: update } = useUpdateTask(id_task);
  const onFinish = (values) => {
    const time_start = values?.time?.[0].format("YYYY-MM-DD");
    const time_end = values?.time?.[1].format("YYYY-MM-DD");

    update({ ...values, time_start, time_end }, { onSuccess: close });
  };
  return (
    <Form
      //   className="absolute top-0 left-0 w-52 z-[60]"
      onFinish={onFinish}
      layout="vertical"
      initialValues={{
        name_task,
        time: [
          moment(time_start, "YYYY-MM-DD"),
          moment(time_end, "YYYY-MM-DD"),
        ],
        desc_task,
      }}
    >
      <Form.Item
        name="name_task"
        label="Tên công việc"
        rules={[
          {
            required: true,
            message: "Bạn cần nhập tên công việc",
          },
        ]}
      >
        <Input />
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
        label="Ngày bắt đầu & Kết thúc"
        name="time"
        rules={[
          {
            required: true,
            message: "Bạn cần nhập ngày bắt đầu và kết thúc",
          },
        ]}
      >
        <DatePicker.RangePicker className="w-full" />
      </Form.Item>
      <div className="flex justify-end space-x-2">
        <Button onClick={close} htmlType="button">
          Huỷ
        </Button>

        <Button type="primary" htmlType="submit">
          Xác nhận
        </Button>
      </div>
    </Form>
  );
};

export default UpdateTaskForm;
