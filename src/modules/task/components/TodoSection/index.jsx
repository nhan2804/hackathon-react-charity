import AssignStaffForTaskSection from "@modules/project/components/AssignStaffForTaskSection";
import AssignStaffForTaskSectionForm from "@modules/project/components/AssignStaffForTaskSection/AssignStaffSectionForm";
import useGetStaff from "@modules/project/hooks/useGetStaff";
import useGetTaskPermission from "@modules/task/hooks/useGetTaskPermisson";
import useShowTask from "@modules/task/hooks/useShowTask";
import { Avatar, Divider, Progress, Tag, Select, Button, Form } from "antd";
import React, { useMemo } from "react";
import StaffSection from "../StaffSection";
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

  const onFinish = (values) => {};

  const percent = useMemo(() => {
    return Math.round((percentChecked / todo?.length) * 100);
  }, [percentChecked, todo]);

  const { data: staff } = useGetStaff(projectId);
  return (
    <div>
      <Progress percent={percent} />
      <Divider orientation="left">Nhân viên thực hiện</Divider>
      {task?.staff ? (
        <StaffSection
          staff={task?.staff}
          taskId={taskId}
          projectId={projectId}
        />
      ) : (
        <>
          <AssignStaffForTaskSection taskId={taskId} projectId={projectId} />
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
