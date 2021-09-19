import { Breadcrumb, Button, Layout, Modal } from "antd";
import React, { useEffect, useRef, useState } from "react";
// import "./index.css";

// import TaskMenu from "../../components/TaskMenu";
// import "react-big-calendar/lib/css/react-big-calendar.css";
import { useParams, useHistory } from "react-router";
import { columns, scales, links } from "./data";
import { Gantt, DefaultTheme } from "@dhtmlx/trial-react-gantt";
import ProjectHeader from "@modules/task/components/ProjectHeader";
import useGetTask from "@modules/task/hooks/useGetTask";
import SectionSkeleton from "@components/Skeleton";
import EditOutlined from "@ant-design/icons/EditOutlined";
import { Link } from "react-router-dom";
import UpdateTaskForm from "@modules/task/components/UpdateTaskNameSection/UpdateTaskForm";
import useModal from "@hooks/useModal";
const { Content } = Layout;

const ProjectDetail = () => {
  useEffect(() => {
    const barScroll = document.querySelector(".Chart-module_chart__1T9rB");
    if (barScroll) {
      barScroll?.scroll(1, 0);
    }
  }, []);
  const history = useHistory();
  const { projectId } = useParams();
  const idTaskTap = useRef("");

  const lastPress = useRef(null);
  const tapCount = useRef(0);
  const [selectedTask, setSelectedTask] = useState({});

  // const handlePress = () => {
  //   const now = Date.now();
  //   if (now - lastPress.current <= 200) {
  //     tapCount.current++;
  //     console.log(tapCount.current);
  //   } else {
  //     tapCount.current = 1;
  //   }
  //   if (tapCount.current === 2)
  //     history.push(`/project/${projectId}/tasks/${id_task}`);
  //   lastPress.current = now;
  // };
  const { data: taskss, isLoading, isFetching } = useGetTask(projectId);
  const { close, isOpen, open } = useModal();
  function handler({ action, obj, id }) {
    if (action === "select-task") {
      const id_task = taskss?.task_repo?.[id - 1]?.id_task;
      if (id_task === idTaskTap.current) {
        const now = Date.now();
        if (now - lastPress.current <= 200) {
          tapCount.current++;
          console.log(tapCount.current);
        } else {
          tapCount.current = 1;
        }
        if (tapCount.current === 2)
          history.push(`/project/${projectId}/tasks/${id_task}`);
        lastPress.current = now;
      } else {
        idTaskTap.current = id_task;
        const now = Date.now();
        lastPress.current = now;
      }
    }
  }
  const breadcrumbItems = [
    <Breadcrumb.Item key="project">
      <Link to="/project">Dự án</Link>
    </Breadcrumb.Item>,
    <Breadcrumb.Item key="project">
      <Link to={`/project/${projectId}/tasks`}>Tất cả công việc</Link>
    </Breadcrumb.Item>,
  ];

  return (
    <>
      <Layout className="h-full">
        <Content className="flex flex-col h-full !bg-white">
          <ProjectHeader
            projectId={projectId}
            breadcrumbs={<Breadcrumb>{breadcrumbItems}</Breadcrumb>}
          />

          <Layout className="flex-grow !bg-white">
            {/* <TaskMenu projectId={projectId} /> */}
            <Content className="p-1">
              <SectionSkeleton isLoading={isLoading} rows={20} />
              <div className="flex h-full space-x-1">
                <div className="h-full w-9 pt-[60px]">
                  {taskss?.data?.map((v) => (
                    <button
                      className="w-full h-[38px] border flex justify-center items-center rounded"
                      onClick={() => {
                        setSelectedTask(v);
                        open();
                      }}
                      key={v?.id_task}
                    >
                      <EditOutlined />
                    </button>
                  ))}
                </div>
                <div className="flex-grow h-full">
                  <DefaultTheme>
                    {taskss && !isFetching ? (
                      <Gantt
                        css={{ border: "1px solid #ccc" }}
                        readonly
                        key={taskss?.length}
                        action={handler}
                        scales={scales}
                        columns={columns}
                        tasks={taskss?.task_repo}
                        links={links}
                      />
                    ) : (
                      <SectionSkeleton isLoading={isFetching} rows={20} />
                    )}
                  </DefaultTheme>
                </div>
              </div>
            </Content>
          </Layout>
        </Content>
      </Layout>
      <Modal
        title="Cập nhật công việc"
        visible={isOpen}
        destroyOnClose={true}
        onOk={close}
        onCancel={close}
        footer={[]}
      >
        <UpdateTaskForm {...selectedTask} close={close} />
      </Modal>
    </>
  );
};
export default ProjectDetail;
