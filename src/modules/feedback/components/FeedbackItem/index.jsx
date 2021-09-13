import CommentItem from "@components/Comment";
import useGetAllFeedbackComment from "@modules/feedback/hooks/useGetAllFeedbackComment";
import { Progress, Tag, List, Form, Input, Button, Slider, Select } from "antd";
import React from "react";
import CreateCommentFeedBackForm from "../CreateCommentFeedBackForm";
import EditOutlined from "@ant-design/icons/EditOutlined";
import { Popover } from "@headlessui/react";
import useUpdateFeedBack from "@modules/feedback/hooks/useUpdateFeedback";

const FeedbackItem = ({ fb }) => {
  console.log(fb?.comments);
  const { data } = useGetAllFeedbackComment(fb?.project_id, fb?.id_feedback);
  const { mutate: update } = useUpdateFeedBack(fb?.project_id, fb?.id_feedback);
  const onSubmit = (data, close) => {
    update(data, { onSuccess: close });
  };
  return (
    <Popover className="relative p-2 space-y-2 bg-red-400 rounded shadow text-gray-50">
      <div>
        <div className="flex justify-between">
          <div className="space-x-1">
            <div className="inline-block text-lg font-semibold">
              {fb?.name_feedback}
            </div>
            <Tag color="blue">Mở</Tag>
            <Popover.Button>
              <button>
                <EditOutlined />
              </button>
            </Popover.Button>
          </div>

          <Progress
            className="text-gray-50"
            type="circle"
            percent={Number(fb?.percent_feedback || 0)}
            width={30}
          />
        </div>
        <div>{fb?.desc_feedback}</div>
      </div>

      <div className="p-2 bg-white rounded">
        <CreateCommentFeedBackForm feedbackID={fb?.id_feedback} />
        <List
          dataSource={data}
          itemLayout="horizontal"
          renderItem={(item) => <CommentItem item={item} />}
        />
      </div>
      <Popover.Panel>
        {({ close }) => (
          <>
            <Popover.Overlay className="fixed top-0 left-0 z-50 w-screen h-screen bg-black/50"></Popover.Overlay>
            <div className="absolute top-0 left-0 right-0 z-50">
              <Form
                className="space-y-2 !p-3 bg-gray-50 rounded"
                onFinish={(data) => onSubmit(data, close)}
                initialValues={{
                  name_feedback: fb?.name_feedback,
                  desc_feedback: fb?.desc_feedback,
                  percent_feedback: Number(fb?.percent_feedback || 0),
                  status_feedback: fb?.status_feedback,
                }}
              >
                <Form.Item
                  name="name_feedback"
                  rules={[
                    { required: true, message: "Bạn cần nhập tên feedback" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="desc_feedback"
                  rules={[
                    {
                      required: true,
                      message: "Bạn cần nhập miêu tả feedback",
                    },
                  ]}
                >
                  <Input.TextArea />
                </Form.Item>
                <Form.Item name="percent_feedback">
                  <Slider
                    min={0}
                    max={100}
                    tipFormatter={(value) => `${value}%`}
                    marks={{
                      0: "0%",
                      25: "25%",
                      50: "50%",
                      75: "75%",
                      100: {
                        style: { textAlign: "right" },
                        label: <span>100%</span>,
                      },
                    }}
                  />
                </Form.Item>
                <Form.Item
                  name="status_feedback"
                  rules={[
                    { required: true, message: "Bạn cần nhập tên feedback" },
                  ]}
                >
                  <Select>
                    <Select.Option value="ACTIVE">Mở</Select.Option>
                    <Select.Option value="CLOSE">Đóng</Select.Option>
                  </Select>
                </Form.Item>
                <div className="flex justify-end space-x-2">
                  <Button onClick={close} htmlType="button">
                    Huỷ
                  </Button>

                  <Button type="primary" htmlType="submit">
                    Sửa
                  </Button>
                </div>
              </Form>
            </div>
          </>
        )}
      </Popover.Panel>
    </Popover>
  );
};

export default FeedbackItem;
