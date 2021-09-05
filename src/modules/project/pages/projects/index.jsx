import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
// import "./index.css";

import SubMenu from "antd/lib/menu/SubMenu";
import LeftNav from "@components/LeftNav";
import ProjectItem from "../../components/ProjectItem";
import { Link } from "react-router-dom";
import CreateProjectSection from "./components/CreateProjectSection";

const { Content } = Layout;

const Project = () => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => {
    setCollapse(!collapse);
  };
  return (
    <Layout className="h-full">
      <LeftNav />
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <div className="grid grid-cols-4 gap-x-3 gap-y-3">
          <CreateProjectSection />
          {[...Array(10)].map((e, i) => {
            return (
              <Link to={`/project/${i + 1}/tasks`} key={i}>
                <ProjectItem />
              </Link>
            );
          })}
        </div>
      </Content>
    </Layout>
  );
};
export default Project;
