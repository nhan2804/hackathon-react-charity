import React from "react";
import { AppstoreAddOutlined } from "@ant-design/icons";
import useModal from "@hooks/useModal";
import { Modal } from "antd";
import CreateProjectForm from "./CreateProjectForm";

const CreateProjectSection = () => {
  const { close, isOpen, open } = useModal();
  return (
    <>
      <button
        onClick={open}
        className="flex items-center justify-center bg-gray-100 border-2 border-gray-500 border-dashed rounded-md min-h-[340px]"
      >
        <div className="space-y-3 text-center">
          <AppstoreAddOutlined className="text-3xl" />
          <div className="text-lg font-semibold">Tạo dự án</div>
        </div>
      </button>
      <Modal
        title="Tạo dự án"
        visible={isOpen}
        onOk={close}
        onCancel={close}
        footer={[]}
      >
        <CreateProjectForm />
      </Modal>
    </>
  );
};

export default CreateProjectSection;
