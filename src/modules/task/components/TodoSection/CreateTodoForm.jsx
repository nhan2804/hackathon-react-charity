import { Popover } from "@headlessui/react";
import { useAppSelector } from "@hooks/reduxHook";
import usePermission from "@hooks/usePermission";
import useCreateTodo from "@modules/task/hooks/useCreateTodo";
import { Button, Input, Form } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Picker from "emoji-picker-react";
import { FileImageOutlined, SmileTwoTone } from "@ant-design/icons";
import { FileUpload } from "@components/Comment/FileUpload";
const CreateTodoForm = ({ taskId, projectId }) => {
  const { mutate: create, isLoading } = useCreateTodo(taskId);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    create(values);
    form.resetFields();
  };
  const [filesUploaded, setfilesUploaded] = useState([]);
  const [files, setFiles] = useState([]);
  const onSubmit = (data) => {
    // return;
    create(
      {
        ...data,
        desc_comment: data?.desc_comment,
        files_comment: filesUploaded,
      },
      {
        onSuccess: () => {
          setfilesUploaded([]);
          setFiles([]);
        },
      }
    );
    form.resetFields();
  };

  const handleOnpaste = (e) => {
    if (!e.clipboardData.files.length) return;
    setFiles([...files, { status: false, file: e.clipboardData.files?.[0] }]);
  };
  const handleBrowser = (e) => {
    if (!e.target.files.length) return;
    setFiles([...files, { status: false, file: e.target.files?.[0] }]);
  };
  const handleDrag = (e) => {};
  const user = useAppSelector((state) => state?.auth?.user);

  const upLoadSuccess = (url) => {
    setfilesUploaded([...filesUploaded, url]);
  };
  useEffect(() => {}, [filesUploaded]);
  const inputFile = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted file input element
    inputFile.current.click();
  };

  const [showEmoji, setshowEmoji] = useState(false);
  const onEmojiClick = (event, emojiObject) => {
    form.setFieldsValue({
      desc_todo: (form.getFieldValue("desc_todo") || "") + emojiObject.emoji,
    });
  };
  const { data } = usePermission(projectId, taskId);
  return data?.todo?.can_create ? (
    <div className="flex">
      <input
        onChange={handleBrowser}
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
        accept="image/*"
      />
      <Form form={form} className="flex-grow" onFinish={onFinish}>
        <Form.Item
          name="name_todo"
          rules={[{ required: true, message: "Bạn cần nhập tên todo" }]}
        >
          <Input placeholder="Thêm todo" />
        </Form.Item>
        <div className="flex space-x-2">
          {files.map((e, i) => {
            return (
              <div key={i} className="flex-shrink-0">
                <FileUpload onUpLoadSuccess={upLoadSuccess} file={e} />
              </div>
            );
          })}
        </div>
        <div className="flex space-x-2" onFinish={onSubmit}>
          <Form.Item
            name="desc_todo"
            className="flex-grow"
            rules={[
              { required: true, message: "Bạn phải nhập nội dung bình luận" },
            ]}
          >
            {/* <RichText onChangeValue={(data)=>form.setFieldsValue({desc_comment:data})} /> */}
            <Input.TextArea
              onDrag={handleDrag}
              onPaste={handleOnpaste}
              placeholder="Miêu tả"
            />
          </Form.Item>
          <Form.Item>
            <div className="flex space-x-1">
              {" "}
              <Button
                onClick={onButtonClick}
                type="ghost"
                icon={<FileImageOutlined />}
              />
              <Popover className="relative space-y-3 space-y-reverse">
                <Popover.Button>
                  <Button
                    icon={<SmileTwoTone />}
                    onClick={() => setshowEmoji(!showEmoji)}
                  ></Button>
                </Popover.Button>
                <Popover.Panel
                  className="absolute right-0 bottom-full"
                  unmount={false}
                >
                  <Picker onEmojiClick={onEmojiClick} />
                </Popover.Panel>
              </Popover>
            </div>
          </Form.Item>
        </div>
        <Form.Item>
          <div className="flex justify-end">
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Thêm
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  ) : null;
};

export default CreateTodoForm;
