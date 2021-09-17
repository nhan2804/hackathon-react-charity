import { Breadcrumb, Divider, Layout, Menu, PageHeader, Skeleton } from "antd";
import React, { useState } from "react";
// import "./index.css";

import LeftNav from "@components/LeftNav";
import ProjectItem from "../../components/ProjectItem";
import { Link } from "react-router-dom";
import useGetProject from "@modules/project/hooks/useGetProJect";
import useGetProjectShared from "@modules/project/hooks/useGetProjectShared";

const { Content } = Layout;

const ProjectShared = () => {
  const { data: projectsh, isLoading } = useGetProjectShared();

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
                  {/* {use} */}
                  {projects?.map((e, i) => {
                    return (
                      <Link to={`/project/${e?.id_project}/tasks`} key={i}>
                        <ProjectItem avatar={e?.user?.avatar} item={e} />
                      </Link>
                    );
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
export default ProjectShared;
