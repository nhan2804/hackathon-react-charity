import { Table, Layout, Menu } from "antd";
import React, { useState } from "react";
// import "./index.css";
import { Link } from "react-router-dom";
import useGetTask from "@modules/task/hooks/useGetTask";
import { useParams } from "react-router";

const { Header, Sider, Content } = Layout;

const TaskMenu = () => {
  const columns = [
    {
      title: "name_task",
      dataIndex: "name_task",
      key: "name_task",
    },
    {
      title: "desc_task",
      dataIndex: "desc_task",
      key: "desc_task",
    },
    {
      title: "time_start",
      dataIndex: "time_start",
      key: "time_start",
    },
    {
      title: "time_end",
      dataIndex: "time_end",
      key: "time_end",
    },
  ];
  let { id } = useParams();
  const { data } = useGetTask(id);
  return (
    <Sider width={300} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        {data?.map((e, i) => {
          return (
            <Menu.Item key={i}>
              <Link to={`tasks/${i + 1}`}>{e?.name_task}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default TaskMenu;
