import { Layout, Menu } from "antd";
import React from "react";
// import "./index.css";
import { Link } from "react-router-dom";
import useGetTask from "@modules/task/hooks/useGetTask";
import Sider from "antd/lib/layout/Sider";

const TaskMenu = ({ projectId, taskId }) => {
  const { data: tasks } = useGetTask(projectId);
  console.log(taskId, "task");
  return (
    <Layout.Sider width={300} className="site-layout-background">
      <Menu
        mode="inline"
        selectedKeys={[taskId]}
        style={{ height: "100%", borderRight: 0 }}
      >
        {tasks?.map((task, i) => {
          return (
            <Menu.Item key={task?.id_task}>
              <Link to={`/project/${projectId}/tasks/${task?.id_task}`}>
                {task?.name_task}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Layout.Sider>
  );
};

export default TaskMenu;
