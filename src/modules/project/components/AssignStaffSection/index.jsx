import React from "react";
import { AppstoreAddOutlined } from "@ant-design/icons";
import useModal from "@hooks/useModal";
import { Button, Modal } from "antd";
import AssignStaffSectionForm from "./AssignStaffSectionForm";
import usePermission from "@hooks/usePermission";

const AssignStaffSection = ({ projectId }) => {
  const { close, isOpen, open } = useModal();
  const { data } = usePermission(projectId);
  return data?.project?.can_add_staff ? (
    <>
      <Button onClick={open}>Thêm nhân viên</Button>
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
  ) : null;
};

export default AssignStaffSection;
