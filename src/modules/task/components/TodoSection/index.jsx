import useGetStaff from "@modules/project/hooks/useGetStaff";
import useGetTaskPermission from "@modules/task/hooks/useGetTaskPermisson";
import useShowTask from "@modules/task/hooks/useShowTask";
import { Avatar, Divider, Progress, Tag, Select, Button, Form } from "antd";
import React, { useMemo } from "react";
import CreateTodoForm from "./CreateTodoForm";
import ListTodo from "./ListTodo";

const { Option } = Select;
const TodoSection = ({ taskId, task, todo, projectId, isLoading }) => {
  const percentChecked = useMemo(
    (e) => {
      return todo?.filter((t) => {
        return t?.status_todo === "CHECKED";
      }).length;
    },
    [todo]
  );

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const percent = useMemo(() => {
    return Math.round((percentChecked / todo?.length) * 100);
  }, [percentChecked, todo]);

  const { data: staff } = useGetStaff(projectId);
  return (
    <div>
      <Progress percent={percent} />
      <Divider orientation="left">Nhân viên thực hiện</Divider>
      {task?.staff ? (
        <div className="flex items-center space-x-2">
          <Avatar alt={task?.staff?.fullname} src={task?.staff?.avatar} />
          <Tag color="magenta">{task?.staff?.fullname}</Tag>
        </div>
      ) : (
        <>
          <Form onFinish={onFinish}>
            <Form.Item name="username">
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Chọn nhân viên có sẵn"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {staff?.map((e) => {
                  return (
                    <Option key={e?.id} value={e?.username}>
                      {e?.username}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Lưu thay đổi
              </Button>
            </Form.Item>
          </Form>
        </>
      )}

      <Divider orientation="left">Danh sách công việc</Divider>
      <ListTodo
        isLoading={isLoading}
        data={todo}
        taskId={taskId}
        projectId={projectId}
      />
      <CreateTodoForm taskId={taskId} projectId={projectId} />
    </div>
  );
};

export default TodoSection;
