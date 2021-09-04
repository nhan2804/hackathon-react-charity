import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
// import "./index.css";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";
import LeftNav from "@components/LeftNav";
import ProjectItem from "../components/ProjectItem";

const { Header, Sider, Content } = Layout;

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
          {[...Array(10)].map((e, i) => {
            return <ProjectItem key={i} />;
          })}
        </div>
      </Content>
    </Layout>
  );
};
export default Project;
