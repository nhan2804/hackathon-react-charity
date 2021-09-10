import { Layout } from "antd";
import React, { useCallback, useEffect } from "react";
// import "./index.css";

// import TaskMenu from "../../components/TaskMenu";
// import "react-big-calendar/lib/css/react-big-calendar.css";
import { useParams, useHistory } from "react-router";
import { columns, scales, tasks, links } from "./data";
import { Gantt, DefaultTheme } from "@dhtmlx/trial-react-gantt";
import ProjectHeader from "@modules/task/components/ProjectHeader";
import useGetTask from "@modules/task/hooks/useGetTask";
import { task_repo } from "@modules/task/repositories/task_repo";
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

  const { data: taskss,isLoading } = useGetTask(projectId);


  
  function handler({ action, obj, id }) {
    if (action === "select-task") {
     const id_task = taskss?.[id-1]?.id_task;
      history.push(`/project/${projectId}/tasks/${id_task}`);
      console.log(`Task ${id} was selected`);
    }
  }
  return (
    <Layout className="h-full">
      <Content className="flex flex-col h-full bg-white">
        <ProjectHeader projectId={projectId} />
{/* đây, api t lấy all task và data tĩnh */}
        <Layout className="flex-grow">
          {/* <TaskMenu projectId={projectId} /> */}
          <Content className="p-1">
            <SectionSkeleton isLoading={isLoading} rows={20}/>
             {taskss ? (
            <DefaultTheme>
             
                <Gantt
                readonly
                key={"dd"}
                action={handler}
                scales={scales}
                columns={columns}
                tasks={taskss}
                links={links}
              />
             
            </DefaultTheme>
             ): "loading"}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
export default ProjectDetail;
