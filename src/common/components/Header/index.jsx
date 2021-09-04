import { Breadcrumb, Button, Layout, Menu } from "antd";
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
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const HeaderNav = () => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => {
    setCollapse(!collapse);
  };
  return (
    <Header className="flex justify-between">
      <div className="logo"></div>

      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item>
          <Link to="/project">Dự án của tôi</Link>
        </Menu.Item>
        {/* <Menu.Item>
          <Link to="/login">Đăng nhập</Link>
        </Menu.Item> */}
      </Menu>
      <div className="space-x-2">
        <Button type="primary">
          <Link to="/project">Đăng nhập</Link>
        </Button>
        <Button>Đăng ký</Button>
      </div>
    </Header>
  );
};

export default HeaderNav;
