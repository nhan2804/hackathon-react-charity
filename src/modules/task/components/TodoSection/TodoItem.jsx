import { Button, Checkbox, Input } from "antd";
import React, { useState } from "react";
import EditOutlined from "@ant-design/icons/EditOutlined";
import { Popover } from "@headlessui/react";
const TodoItem = ({ item, checked }) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <Popover className="relative flex w-full space-x-2">
      <Checkbox defaultChecked={checked}></Checkbox>
      <div className="flex-grow">
        <div className="font-medium">{item}</div>
        <div>sdfdsfadsfsafd</div>
      </div>
      <div className="">
        <Popover.Button>
          <Button
            icon={<EditOutlined />}
            shape="circle"
            onClick={() => setIsEdit(true)}
          />
        </Popover.Button>
      </div>
      <Popover.Panel>
        {({ close }) => (
          <>
            <Popover.Overlay className="fixed top-0 left-0 z-50 w-screen h-screen bg-black/50"></Popover.Overlay>
            <div className="absolute top-0 left-0 right-0 z-[60] space-y-2 p-2 bg-gray-50 rounded">
              <Input />
              <Input.TextArea />
              <div className="flex justify-end space-x-2">
                <Button onClick={close}>Huỷ</Button>

                <Button type="primary">Sửa</Button>
              </div>
            </div>
          </>
        )}
      </Popover.Panel>
    </Popover>
  );
};

export default TodoItem;
