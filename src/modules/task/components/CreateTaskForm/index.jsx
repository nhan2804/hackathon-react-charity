import React from "react";
import { AppstoreAddOutlined } from "@ant-design/icons";
import useModal from "@hooks/useModal";
import { Button, Modal } from "antd";
import CreateTaskForm from "./CreateTaskForm";
import usePermission from "@hooks/usePermission";

const CreateTaskSection = ({ projectId }) => {
  const { data } = usePermission(projectId);
  const { close, isOpen, open } = useModal();
  return data?.task?.can_create ? (
    <>
      <Button onClick={open} type="primary">
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
  ) : null;
};

export default CreateTaskSection;
