import { Button, Checkbox, Input, Form, Image } from "antd";
import React from "react";
import EditOutlined from "@ant-design/icons/EditOutlined";
import DeleteOutlined from "@ant-design/icons/DeleteOutlined";

import { Popover } from "@headlessui/react";
import useUpdateTodo from "@modules/task/hooks/useUpdateTodo";
import useDoneTodo from "@modules/task/hooks/useDoneTodo";
import useDeleteTodo from "@modules/task/hooks/useDeleteTodo";
import usePermission from "@hooks/usePermission";
const TodoItem = ({
  item,
  checked,
  desc,
  id_todo,
  task_id,
  projectId,
  canDone,
  last_done,
  files_todo,
}) => {
  const { mutate: update } = useUpdateTodo(id_todo, task_id);
  const { mutate: doneTodo } = useDoneTodo(projectId, task_id?.toString());
  const { mutate: deleteTodo } = useDeleteTodo(task_id?.toString());
  const { data } = usePermission(projectId);
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
        onClick={() => canDone && doneTodo({ id_todo })}
      ></Checkbox>
      <div className="flex-grow">
        <div className="font-semibold space-x-2 flex">
          <div className="break-words break-all">{item}</div>
          {last_done && (
            <div className="text-gray-500">
              Hoàn thành lần cuối : {last_done}
            </div>
          )}
        </div>
        <div className="text-gray-500">{desc}</div>
        <div className="image-todo">
          <Image.PreviewGroup>
            {files_todo?.map((img) => (
              <Image
                src={img}
                previewPrefixCls="inline"
                preview={{ maskClassName: "inline" }}
              />
            ))}
          </Image.PreviewGroup>
        </div>
      </div>
      <div className="space-x-2">
        {data?.todo?.can_edit && (
          <Popover.Button>
            <Button icon={<EditOutlined />} shape="circle" />
          </Popover.Button>
        )}
        {data?.todo?.can_edit && (
          <Button
            icon={<DeleteOutlined />}
            shape="circle"
            danger
            onClick={() => deleteTodo({ id_todo })}
          />
        )}
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
