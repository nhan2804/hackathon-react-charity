import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import "./index.css";
import SubMenu from "antd/lib/menu/SubMenu";

const { Header, Sider, Content } = Layout;

const HeaderNav = () => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => {
    setCollapse(!collapse);
  };
  return (
    <Header>
      <div className="logo"></div>

      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        {new Array(6).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })}
      </Menu>
    </Header>
  );
};

export default HeaderNav;
