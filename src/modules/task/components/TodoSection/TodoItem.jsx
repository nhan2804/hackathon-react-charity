import { Button, Checkbox, Input, Form } from "antd";
import React, { useState } from "react";
import EditOutlined from "@ant-design/icons/EditOutlined";
import DeleteOutlined from "@ant-design/icons/DeleteOutlined";

import { Popover } from "@headlessui/react";
import useUpdateTodo from "@modules/task/hooks/useUpdateTodo";
import useDoneTodo from "@modules/task/hooks/useDoneTodo";
const TodoItem = ({ item, checked, desc, id_todo, task_id, projectId }) => {
  const { mutate: update } = useUpdateTodo(id_todo, task_id);
  const { mutate: doneTodo } = useDoneTodo(projectId, task_id?.toString());
  const onEdit = (data, close) => {
    update(data, {
      onSuccess: () => {
        close();
      },
    });
  };
  return (
    <Popover className="relative flex w-full space-x-2">
      <Checkbox
        checked={checked}
        defaultChecked={checked}
        onClick={() => !checked && doneTodo({ id_todo })}
      ></Checkbox>
      <div className="flex-grow">
        <div className="font-semibold">{item}</div>
        <div className="text-gray-500">{desc}</div>
      </div>
      <div className="space-x-2">
        <Popover.Button>
          <Button icon={<EditOutlined />} shape="circle" />
        </Popover.Button>
        <Button icon={<DeleteOutlined />} shape="circle" danger />
      </div>
      <Popover.Panel>
        {({ close }) => (
          <>
            <Popover.Overlay className="fixed top-0 left-0 z-50 w-screen h-screen bg-black/50"></Popover.Overlay>
            <Form
              className="absolute top-0 left-0 right-0 z-[60] space-y-2 !p-2 bg-gray-50 rounded"
              onFinish={(data) => onEdit(data, close)}
              initialValues={{ name_todo: item, desc_todo: desc }}
            >
              <Form.Item name="name_todo">
                <Input />
              </Form.Item>
              <Form.Item name="desc_todo">
                <Input.TextArea />
              </Form.Item>
              <div className="flex justify-end space-x-2">
                <Button onClick={close} htmlType="button">
                  Huỷ
                </Button>

                <Button type="primary" htmlType="submit">
                  Sửa
                </Button>
              </div>
            </Form>
          </>
        )}
      </Popover.Panel>
    </Popover>
  );
};

export default TodoItem;
