import { Breadcrumb, Button, Layout, Menu } from "antd";
import React, { useState } from "react";
// import "./index.css";
import SubMenu from "antd/lib/menu/SubMenu";
import TaskMenu from "../components/TaskMenu";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CreateTaskSection from "../components/CreateTaskForm";
const { Header, Sider, Content } = Layout;
const localizer = momentLocalizer(moment);
const Task = () => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => {
    setCollapse(!collapse);
  };
  const events = [
    {
      title: "Công việc 1",
      start: new Date(),
      end: new Date(),
    },
    {
      title: "Công việc 2",
      start: new Date("2021-09-10"),
      end: new Date("2021-09-12"),
    },
  ];
  return (
    <Layout className="h-full">
      <TaskMenu />
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <div>
          <div className="grid grid-cols-6 space-x-2">
            <CreateTaskSection></CreateTaskSection>
            <Button type="primary">Thêm nguời dùng</Button>
            <Button type="primary">Thêm FeedBack</Button>
          </div>
        </div>
      </Content>
    </Layout>
  );
};
export default Task;
