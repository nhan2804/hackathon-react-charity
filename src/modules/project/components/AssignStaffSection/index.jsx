import React from "react";
import { AppstoreAddOutlined } from "@ant-design/icons";
import useModal from "@hooks/useModal";
import { Button, Modal } from "antd";
import AssignStaffSectionForm from "./AssignStaffSectionForm";

const AssignStaffSection = () => {
  const { close, isOpen, open } = useModal();
  return (
    <>
    
      <Button onClick={open} type="primary">Thêm nhân viên</Button>
      <React.StrictMode>
      <Modal
        title="Thêm nhân viên"
        visible={isOpen}
        onOk={close}
        onCancel={close}
        footer={[]}
      >
        <AssignStaffSectionForm />
        
      </Modal>
      </React.StrictMode>
     
    </>
  );
};

export default AssignStaffSection;
