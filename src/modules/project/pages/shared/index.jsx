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
  console.log(projectsh);

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

        {projectsh?.map((user, i) => {
          return (
            <>
              <Divider orientation="left">
                <span>{user?.fullname}</span>
              </Divider>
              <div className="grid grid-cols-5 gap-x-3 gap-y-3">
                {user?.projects?.map((e, i) => {
                  return (
                    <Link to={`/project/${e?.id_project}/tasks`} key={i}>
                      <ProjectItem avatar={user?.avatar} item={e} />
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
