import React from "react";

import useModal from "@hooks/useModal";
import { Button, Modal } from "antd";
import AssignStaffForTaskSectionForm from "./AssignStaffSectionForm";
import usePermission from "@hooks/usePermission";
import EditOutlined from "@ant-design/icons/EditOutlined";
const EditStaffSection = ({ projectId, taskId }) => {
  const { close, isOpen, open } = useModal();
  const { data } = usePermission(projectId);
  return data?.project?.can_add_staff ? (
    <>
      <Button icon={<EditOutlined />} shape="circle" onClick={open} />
      <React.StrictMode>
        <Modal
          title="Thêm nhân viên"
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

export default EditStaffSection;
