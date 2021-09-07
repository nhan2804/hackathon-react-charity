import { Breadcrumb, Layout, Menu, PageHeader } from "antd";
import React, { useState } from "react";
// import "./index.css";

import LeftNav from "@components/LeftNav";
import ProjectItem from "../../components/ProjectItem";
import { Link } from "react-router-dom";
import CreateProjectSection from "./components/CreateProjectSection";
import useGetProject from "@modules/project/hooks/useGetProJect";

const { Content } = Layout;

const Project = () => {
  const { data: projects, isLoading } = useGetProject();
  console.log(projects);
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
          {projects?.map((e, i) => {
            return (
              <Link to={`/project/${e?.id_project}/tasks`} key={i}>
                <ProjectItem item={e} />
              </Link>
            );
          })}
        </div>
      </Content>
    </Layout>
  );
};
export default Project;
