import { Breadcrumb, Divider, Layout, Skeleton } from "antd";
import React from "react";
// import "./index.css";

import LeftNav from "@components/LeftNav";
import ProjectItem from "../../components/ProjectItem";
import { Link } from "react-router-dom";

import useGetProjectMe from "@modules/project/hooks/useGetProjectMe";
import CreateProjectSection from "../projects/components/CreateProjectSection";

const { Content } = Layout;

const ProjectMe = () => {
  const { data: projectsh, isLoading } = useGetProjectMe();
  const breadcrumbItems = [
    <Breadcrumb.Item key="project">
      <Link to="/project">Dự án</Link>
    </Breadcrumb.Item>,
    <Breadcrumb.Item key="project">
      <Link to="/project/me">Dự án của tôi</Link>
    </Breadcrumb.Item>,
  ];
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
        <Breadcrumb>{breadcrumbItems}</Breadcrumb>
        <div className="grid grid-cols-5 gap-x-3 gap-y-3">
          {isLoading &&
            [...Array(10)].map((e) => {
              return <Skeleton active paragraph={{ rows: 10 }} />;
            })}
        </div>

        {projectsh &&
          Object.keys(projectsh)?.map((key, i) => {
            const projects = projectsh[key];
            return (
              <>
                <Divider orientation="left">
                  <span>{key}</span>
                </Divider>
                <div className="grid grid-cols-5 gap-x-3 gap-y-3">
                  {i === 0 && <CreateProjectSection />}
                  {projects?.map((e, i) => {
                    return <ProjectItem item={e} key={i} />;
                  })}
                </div>
              </>
            );
          })}

        {/* <div className="grid grid-cols-5 gap-x-3 gap-y-3">
          {isLoading ? (
            [...Array(10)].map((e)=>{
              return <Skeleton active paragraph={{ rows: 10 }} />
            })
          ) : (
            <>
              {projects?.map((e, i) => {
                return (
                  <Link to={`/project/${e?.id_project}/tasks`} key={i}>
                    <ProjectItem item={e} />
                  </Link>
                );
              })}
            </>
          )}
        </div> */}
      </Content>
    </Layout>
  );
};
export default ProjectMe;
