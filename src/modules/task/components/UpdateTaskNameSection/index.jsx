import React from "react";
import { Button, Input, Form, Modal } from "antd";
import EditOutlined from "@ant-design/icons/EditOutlined";
import CheckOutlined from "@ant-design/icons/CheckOutlined";
import useModal from "@hooks/useModal";
import { Popover } from "@headlessui/react";
import UpdateTaskForm from "./UpdateTaskForm";
const UpdateTaskNameSection = ({ name_task, ...rest }) => {
  const { close, isOpen, open } = useModal();
  return (
    <>
      <div className="flex items-baseline space-x-1">
        <div className="relative">
          <div>{name_task}</div>
        </div>
        <button className="flex items-center opacity-70" onClick={open}>
          <EditOutlined />
        </button>
      </div>
      <Modal
        title="Cập nhật công việc"
        visible={isOpen}
        onOk={close}
        onCancel={close}
        footer={[]}
      >
        <UpdateTaskForm {...{ ...rest, name_task }} close={close} />
      </Modal>
    </>
  );
};

export default UpdateTaskNameSection;
