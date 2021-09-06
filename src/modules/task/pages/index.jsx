import { Breadcrumb, Button, Layout, Menu } from "antd";
import React, { useState } from "react";
// import "./index.css";
import SubMenu from "antd/lib/menu/SubMenu";
import TaskMenu from "../components/TaskMenu";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { GanttComponent } from "@syncfusion/ej2-react-gantt";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-calendars/styles/material.css";
import "@syncfusion/ej2-dropdowns/styles/material.css";
import "@syncfusion/ej2-gantt/styles/material.css";
import "@syncfusion/ej2-grids/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-layouts/styles/material.css";
import "@syncfusion/ej2-lists/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";
import "@syncfusion/ej2-richtexteditor/styles/material.css";
import "@syncfusion/ej2-treegrid/styles/material.css";
import CreateTaskSection from "../components/CreateTaskForm";
import { useParams } from "react-router";
import useGetTask from "../hooks/useGetTask";
import { Gantt, DefaultTheme } from "@dhtmlx/trial-react-gantt";
const { Header, Sider, Content } = Layout;

const localizer = momentLocalizer(moment);
const Task = () => {
  let { id } = useParams();
  const { data: tasksd } = useGetTask(id);
  const [taskFields, setTaskFields] = useState({
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    endDate: "EndDate",
    progress: "Progress",
  });
  let dataSource = [
    {
      TaskID: 1,
      TaskName: '<a href="https://www.w3schools.com">Visit W3Schools.com!</a>',
      StartDate: new Date("04/02/2019"),
      EndDate: new Date("04/21/2019"),
    },
  ];
  const scales = [
    { unit: "month", step: 1, format: "MMMM yyy" },
    { unit: "day", step: 1, format: "d" },
  ];

  const columns = [
    { name: "text", label: "Task name", width: "100%" },
    { name: "start", label: "Start time", align: "center" },
    { name: "duration", label: "Duration", width: "70px", align: "center" },
  ];

  const tasks = [
    {
      id: 1,
      open: true,
      start_date: "2020-11-06",
      duration: 8,
      text: "React Gantt Widget",
      progress: 60,
      type: "project",
    },
    {
      id: 2,
      parent: 1,
      start_date: "2020-11-06",
      duration: 4,
      text: "Lib-Gantt",
      type: "project",
      progress: 80,
    },
  ];
  const links = [{ source: 2, target: 1, type: 0 }];
  return (
    <Layout className="h-full">
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
          <TaskMenu />
          <GanttComponent
            columnMenuClick={(e) => {
              console.log(e);
              alert("dddd");
            }}
            onTaskbarClick={(e) => {
              console.log(e);
            }}
            dataSource={dataSource}
            height="450px"
            taskFields={taskFields}
            allowSelection={true}
          />
        </div>
      </Content>
    </Layout>
  );
};
export default Task;
