import { Badge, Divider, Layout, PageHeader, Progress, Tag } from "antd";
import React, { useMemo } from "react";
// import "./index.css";
import { useParams } from "react-router";
import ProjectHeader from "@modules/task/components/ProjectHeader";
import TodoSection from "@modules/task/components/TodoSection";
import CommentSection from "@modules/task/components/CommentSection";
import useShowTask from "@modules/task/hooks/useShowTask";
import useGetTodo from "@modules/task/hooks/useGetTodo";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// const localizer = momentLocalizer(moment);
const TaskDetail = () => {
  const { projectId, taskId } = useParams();
  const { data: task } = useShowTask(taskId);
  const { data: todo } = useGetTodo(taskId);
  const percentChecked = useMemo(
    (e) => {
      return todo?.filter((t) => {
        return t?.status_todo === "CHECKED";
      }).length;
    },
    [todo]
  );
  const percent = useMemo(() => {
    return Math.round((percentChecked / todo?.length) * 100);
  }, [percentChecked, todo]);
  const isDone = percent === 100;
  return (
    <Layout className="h-full">
      <ProjectHeader projectId={projectId} />
      <Layout>
        {/* <TaskMenu projectId={projectId} taskId={taskId} /> */}
        <Layout.Content className="bg-white">
          <PageHeader
            className="site-page-header"
            title={task?.name_task}
            // subTitle="This is a subtitle"
            tags={[
              isDone ? (
                <Tag color="green">Hoàn thành</Tag>
              ) : (
                <Tag color="blue">Đang tiến hành</Tag>
              ),
              <Tag color="green">
                {percentChecked}/{Number(todo?.length || 0)}
              </Tag>,
            ]}
          />

          <div className="px-6">
            <div className="grid grid-cols-2 gap-4">
              <TodoSection {...{ taskId, task, todo, projectId }} />
              <CommentSection id={taskId} />
            </div>
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
export default TaskDetail;
