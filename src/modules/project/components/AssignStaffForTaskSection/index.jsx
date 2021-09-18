import React from "react";
import { AppstoreAddOutlined } from "@ant-design/icons";
import useModal from "@hooks/useModal";
import { Button, Modal } from "antd";
import AssignStaffForTaskSectionForm from "./AssignStaffSectionForm";
import usePermission from "@hooks/usePermission";

const AssignStaffForTaskSection = ({ projectId, taskId }) => {
  const { close, isOpen, open } = useModal();
  const { data } = usePermission(projectId);
  return data?.project?.can_add_staff ? (
    <>
      <Button onClick={open}>Thêm nhân viên</Button>
      <React.StrictMode>
        <Modal
          title="Lưu thay đổi"
          visible={isOpen}
          onOk={close}
          onCancel={close}
          footer={[]}
        >
          <AssignStaffForTaskSectionForm id_task={taskId} />
        </Modal>
      </React.StrictMode>
    </>
  ) : null;
};

export default AssignStaffForTaskSection;
