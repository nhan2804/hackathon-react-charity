import { Dialog, Transition } from "@headlessui/react";
import useModal from "@hooks/useModal";
import useGetClient from "@modules/feedback/hooks/useGetClient";
import { Avatar, Button } from "antd";
import React, { Fragment } from "react";
import DeleteOutlined from "@ant-design/icons/DeleteOutlined";
import useDeleteClient from "@modules/feedback/hooks/useDeleteClient";
const ListClient = ({ projectId }) => {
  const { data } = useGetClient(projectId);
  const { close, isOpen, open } = useModal();
  const { mutate: deleteClient } = useDeleteClient(projectId);
  return (
    <div className="relative inline-flex items-center space-y-1">
      <button onClick={open} className="flex">
        <Avatar.Group className="!-space-x-3" maxCount={6}>
          {data?.map((user) => (
            <Avatar src={user?.avatar} key={user?.id} className="first:!m-0" />
          ))}
        </Avatar.Group>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={close}
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
                  Danh sách client
                </Dialog.Title>
                <div className="mt-2 space-y-2">
                  {data?.map((user) => (
                    <div className="flex items-center justify-between space-x-2">
                      <Avatar
                        src={user?.avatar}
                        key={user?.id}
                        className="first:!m-0"
                      />
                      <div className="flex-grow font-medium">
                        {user?.fullname || user?.username}
                      </div>
                      <div>
                        {" "}
                        <Button
                          icon={<DeleteOutlined />}
                          shape="circle"
                          danger
                          onClick={() => deleteClient(user?.id)}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ListClient;
