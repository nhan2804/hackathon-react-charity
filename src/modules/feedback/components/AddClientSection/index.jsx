import useModal from "@hooks/useModal";
import { Button, Modal } from "antd";
import React from "react";
import AddClientForm from "./AddClientForm";

const AddClientSection = () => {
  const { close, isOpen, open } = useModal();
  return (
    <>
      <Button onClick={open}>Thêm khách hàng</Button>
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
