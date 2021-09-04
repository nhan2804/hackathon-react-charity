import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
// import "./index.css";
import SubMenu from "antd/lib/menu/SubMenu";
import TaskMenu from "../components/TaskMenu";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
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
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </div>
      </Content>
    </Layout>
  );
};
export default Task;
