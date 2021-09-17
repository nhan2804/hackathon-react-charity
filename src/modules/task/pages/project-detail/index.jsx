import { Button, Layout } from "antd";
import React, { useEffect, useState } from "react";
// import "./index.css";

// import TaskMenu from "../../components/TaskMenu";
// import "react-big-calendar/lib/css/react-big-calendar.css";
import { useParams, useHistory } from "react-router";
import { columns, scales, links } from "./data";
import { Gantt, DefaultTheme } from "@dhtmlx/trial-react-gantt";
import ProjectHeader from "@modules/task/components/ProjectHeader";
import useGetTask from "@modules/task/hooks/useGetTask";
import SectionSkeleton from "@components/Skeleton";
const { Content } = Layout;

const ProjectDetail = () => {
  useEffect(() => {
    const barScroll = document.querySelector(".Chart-module_chart__1T9rB");
    if (barScroll) {
      barScroll?.scroll(1, 0);
    }
  }, []);
  const history = useHistory();
  let { projectId } = useParams();

  const { data: taskss, isLoading, isFetching } = useGetTask(projectId);

  function handler({ action, obj, id }) {
    if (action === "select-task") {
      const id_task = taskss?.[id - 1]?.id_task;
      history.push(`/project/${projectId}/tasks/${id_task}`);
    }
  }

  return (
    <Layout className="h-full">
      <Content className="flex flex-col h-full bg-white">
        <ProjectHeader projectId={projectId} />
        <Layout className="flex-grow">
          {/* <TaskMenu projectId={projectId} /> */}
          <Content className="p-1">
            <SectionSkeleton isLoading={isLoading} rows={20} />
            <DefaultTheme>
              {taskss && !isFetching ? (
                <Gantt
                  css={{ border: "1px solid #ccc" }}
                  readonly
                  key={taskss?.length}
                  action={handler}
                  scales={scales}
                  columns={columns}
                  tasks={taskss}
                  links={links}
                />
              ) : (
                <SectionSkeleton isLoading={isFetching} rows={20} />
              )}
            </DefaultTheme>
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
export default ProjectDetail;
