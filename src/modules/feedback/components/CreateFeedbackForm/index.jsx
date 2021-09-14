import useCreateFeedBack from "@modules/feedback/hooks/useCreateFeedBack";
import { Button, Input ,Form} from "antd";
import React, { useState } from "react";
import { useParams } from "react-router";
import {PlusOutlined } from '@ant-design/icons';
const CreateFeedbackForm = () => {
  let { projectId } = useParams();
  const {form}= Form.useForm();
  const { mutate: create, isLoading } = useCreateFeedBack();
  const onFinish = (values) => {
    create({...values,project_id:projectId})
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [isCreating, setIsCreating] = useState(false);
  return (
    <div>
      {!isCreating  ?<Button onClick={()=>setIsCreating(!isCreating)} icon={<PlusOutlined />}>Thêm</Button>:
      <div className="relative space-y-2">
      <Form form={form} className="flex-grow" onFinish={onFinish}>
        <Form.Item
          name="name_feedback"
          rules={[{ required: true, message: "Bạn cần nhập tên feedback" }]}
        >
          <Input placeholder="Tên feedback" />
        </Form.Item>
        <Form.Item  name="desc_feedback"
        rules={[{ required: true, message: "Bạn cần nhập miêu tả feedback" }]}
        >
          <Input.TextArea placeholder="Mô tả feedback" />
        </Form.Item>
        <Form.Item>
          <div className="flex justify-end">
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Thêm
            </Button>
          </div>
        </Form.Item>
      </Form>
      
        {/* <Input placeholder="Tên feedback" onClick={() => setIsCreating(true)} />
        {isCreating && (
          <div className="absolute left-0 right-0 flex justify-end space-x-2 top-full">
            <Button type="primary" onClick={() => setIsCreating(false)}>
              Huỷ
            </Button>
            <Button type="primary">Thêm</Button>
          </div>
        )} */}
      </div>
      }
    </div>
  );
};

export default CreateFeedbackForm;
