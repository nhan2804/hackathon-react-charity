import useModal from "@hooks/useModal";
import useGetClient from "@modules/feedback/hooks/useGetClient";
import { Button, Modal } from "antd";
import React from "react";
import ListClient from "../ListClient";
import AddClientForm from "./AddClientForm";

const AddClientSection = ({ projectId }) => {
  const { close, isOpen, open } = useModal();

  return (
    <>
      <div className="flex space-x-2">
        <ListClient projectId={projectId} />
        <Button onClick={open}>Thêm khách hàng</Button>
      </div>

      <React.StrictMode>
        <Modal
          title="Thêm khách hàng"
          visible={isOpen}
          onOk={close}
          onCancel={close}
          footer={[]}
        >
          <AddClientForm close={close} />
        </Modal>
      </React.StrictMode>
    </>
  );
};

export default AddClientSection;
