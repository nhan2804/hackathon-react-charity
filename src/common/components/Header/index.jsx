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
import { Link } from "react-router-dom";

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
          return <Menu.Item key={key}>{`Menu ${key}`}</Menu.Item>;
        })}
        <Menu.Item>
          <Link to="/project">Dự án của tôi</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/login">Đăng nhập</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderNav;
