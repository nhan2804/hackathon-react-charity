import { Dialog, Transition } from "@headlessui/react";
import { Button } from "antd";
import React, { Fragment, useState } from "react";

export default function Confirm({ onConfirm }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const handleConfirm = async () => {
    await onConfirm();
    setIsOpen(false);
    // onConfirm(cb, okOk);
  };

  return (
    <>
      <Button type="primary" danger onClick={openModal}>
        Xóa
      </Button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Xác nhận
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Bạn có chắc muốn xóa không? Điều này không thể hoàn tác
                  </p>
                </div>

                <div className="mt-4 ">
                  <div className="flex justify-end space-x-2">
                    <Button type="default" onClick={closeModal}>
                      Hủy
                    </Button>
                    <Button type="default" danger onClick={() => onConfirm()}>
                      Xóa
                    </Button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
