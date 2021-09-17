import { Avatar, Button, Input, Form } from "antd";
import { Popover } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";
import {
  UserOutlined,
  FileImageOutlined,
  SmileTwoTone,
  SendOutlined,
} from "@ant-design/icons";
import useCreateComment from "@modules/task/hooks/useCreateComment";
import { useAppSelector } from "@hooks/reduxHook";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import RichText from "@components/RichText";
import { FileUpload } from "@components/Comment/FileUpload";
import Picker from "emoji-picker-react";
const CreateCommentForm = ({ taskId }) => {
  const [form] = Form.useForm();
  const { mutate: create, isLoading } = useCreateComment(taskId, "TASK");
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
      desc_comment:
        (form.getFieldValue("desc_comment") || "") + emojiObject.emoji,
    });
  };
  return (
    <>
      <input
        onChange={handleBrowser}
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
      />
      <div className="flex space-x-2">
        {files.map((e, i) => {
          return (
            <div key={i} className="flex-shrink-0">
              <FileUpload onUpLoadSuccess={upLoadSuccess} file={e} />
            </div>
          );
        })}
      </div>
      <Form form={form} className="flex space-x-2" onFinish={onSubmit}>
        <Avatar
          src={user?.avatar}
          icon={<UserOutlined />}
          className="flex-shrink-0"
        />
        <Form.Item
          name="desc_comment"
          className="flex-grow"
          rules={[
            { required: true, message: "Bạn phải nhập nội dung bình luận" },
          ]}
        >
          {/* <RichText onChangeValue={(data)=>form.setFieldsValue({desc_comment:data})} /> */}
          <Input
            onDrag={handleDrag}
            onPaste={handleOnpaste}
            placeholder="Bình luận / ..."
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
        <Form.Item>
          <Button
            icon={<SendOutlined />}
            type="primary"
            htmlType="submit"
            loading={isLoading}
          ></Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateCommentForm;
