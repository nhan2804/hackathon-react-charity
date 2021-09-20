import { Breadcrumb, Divider, Layout, Skeleton } from "antd";
import React from "react";
// import "./index.css";

import LeftNav from "@components/LeftNav";
import ProjectItem from "../../components/ProjectItem";
import { Link } from "react-router-dom";
import CreateProjectSection from "./components/CreateProjectSection";
import useGetProject from "@modules/project/hooks/useGetProJect";
import { DatabaseOutlined } from "@ant-design/icons";
const { Content } = Layout;

const Project = () => {
  const { data: projects, isLoading } = useGetProject();
  const breadcrumbItems = [
    <Breadcrumb.Item key="project">
      <Link to="/project">Dự án</Link>
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
        <div>
          <Divider orientation="left">
            <div className="text-xl">Dự án của tôi</div>
          </Divider>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-3 gap-y-3">
            <CreateProjectSection />
            {isLoading ? (
              [...Array(10)].map((e) => {
                return <Skeleton active paragraph={{ rows: 10 }} />;
              })
            ) : (
              <>
                {projects?.me?.map((e, i) => {
                  return <ProjectItem item={e} key={i} />;
                })}
                <Link
                  to="/project/me"
                  // onClick={open}
                  className="flex items-center justify-center rounded-md min-h-[340px]"
                >
                  <div className="space-y-3 text-center">
                    <DatabaseOutlined className="text-3xl" />
                    {/* <AppstoreAddOutlined className="text-3xl" /> */}
                    <div className="text-lg font-semibold">Xem thêm</div>
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
        <div>
          <Divider orientation="left">
            <div className="text-xl">Dự án được chia sẻ với tôi</div>
          </Divider>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-3 gap-y-3">
            {isLoading ? (
              [...Array(10)].map((e) => {
                return <Skeleton active paragraph={{ rows: 10 }} />;
              })
            ) : (
              <>
                {projects?.shared?.map((e, i) => {
                  return <ProjectItem key={i} item={e} />;
                })}
                <Link
                  to="/project/shared"
                  // onClick={open}
                  className="flex items-center justify-center rounded-md min-h-[340px]"
                >
                  <div className="space-y-3 text-center">
                    <DatabaseOutlined className="text-3xl" />
                    {/* <AppstoreAddOutlined className="text-3xl" /> */}
                    <div className="text-lg font-semibold">Xem thêm</div>
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </Content>
    </Layout>
  );
};
export default Project;
