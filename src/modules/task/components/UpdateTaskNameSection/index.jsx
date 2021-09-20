import React from "react";
import { Modal } from "antd";
import EditOutlined from "@ant-design/icons/EditOutlined";

import useModal from "@hooks/useModal";

import UpdateTaskForm from "./UpdateTaskForm";
const UpdateTaskNameSection = ({ name_task, canEdit, ...rest }) => {
  const { close, isOpen, open } = useModal();
  return (
    <>
      <div className="flex items-baseline space-x-1">
        <div className="relative">
          <div>{name_task}</div>
        </div>
        {canEdit && (
          <button className="flex items-center opacity-70" onClick={open}>
            <EditOutlined />
          </button>
        )}
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
