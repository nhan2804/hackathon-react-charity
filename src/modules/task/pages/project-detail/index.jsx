import { Layout } from "antd";
import React from "react";
// import "./index.css";

import TaskMenu from "../../components/TaskMenu";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useParams } from "react-router";

import Chart from "react-google-charts";

import ProjectHeader from "@modules/task/components/ProjectHeader";
const { Content } = Layout;

const ProjectDetail = () => {
  let { id } = useParams();
  return (
    <Layout className="h-full">
      <Content className="h-full bg-white">
        <ProjectHeader />

        <Layout className="">
          <TaskMenu projectId={id} />
          <Content className="p-6">
            <Chart
              width={"100%"}
              height={"400px"}
              chartType="Gantt"
              loader={<div>Loading Chart</div>}
              data={[
                [
                  { type: "string", label: "Task ID" },
                  { type: "string", label: "Task Name" },
                  { type: "date", label: "Start Date" },
                  { type: "date", label: "End Date" },
                  { type: "number", label: "Duration" },
                  { type: "number", label: "Percent Complete" },
                  { type: "string", label: "Dependencies" },
                ],
                [
                  "Research",
                  "Find sources",
                  new Date(2015, 0, 1),
                  new Date(2015, 0, 5),
                  null,
                  100,
                  null,
                ],
                [
                  "Write",
                  "Write paper",
                  null,
                  new Date(2015, 0, 9),
                  3 * 24 * 60 * 60 * 1000,
                  25,
                  "Research,Outline",
                ],
                [
                  "Cite",
                  "Create bibliography",
                  null,
                  new Date(2015, 0, 7),
                  1 * 24 * 60 * 60 * 1000,
                  20,
                  "Research",
                ],
                [
                  "Complete",
                  "Hand in paper",
                  null,
                  new Date(2015, 0, 10),
                  1 * 24 * 60 * 60 * 1000,
                  0,
                  "Cite,Write",
                ],
                [
                  "Outline",
                  "Outline paper",
                  null,
                  new Date(2015, 0, 6),
                  1 * 24 * 60 * 60 * 1000,
                  100,
                  "Research",
                ],
                [
                  "Outline 2",
                  "Outline paper 2",
                  null,
                  new Date(2015, 1, 6),
                  1 * 24 * 60 * 60 * 1000,
                  100,
                  "Research",
                ],
              ]}
              rootProps={{ "data-testid": "1" }}
            />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
export default ProjectDetail;
