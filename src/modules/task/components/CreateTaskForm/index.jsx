import React from "react";
import { AppstoreAddOutlined } from "@ant-design/icons";
import useModal from "@hooks/useModal";
import { Button, Modal } from "antd";
import CreateTaskForm from "./CreateTaskForm";

const CreateTaskSection = () => {
  const { close, isOpen, open } = useModal();
  return (
    <>
      <Button onClick={open} type="default">
        <div>Tạo công viêc</div>
      </Button>
      <Modal
        title="Tạo công viêc"
        visible={isOpen}
        onOk={close}
        onCancel={close}
        footer={[]}
      >
        <CreateTaskForm close={close} />
      </Modal>
    </>
  );
};

export default CreateTaskSection;
