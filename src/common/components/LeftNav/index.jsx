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
import { left_nav } from "@config/menu/left_nav";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const LeftNav = (props) => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => {
    setCollapse(!collapse);
  };
  return (
    <Sider width={180} className={`site-layout-background ${props?.className}`}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        {left_nav.map((e,i)=>{
          return (
            <SubMenu key={i+1} icon={e.icon} title={e.title}>
              {e?.child?.map((e1,i1)=>{
                return (<Menu.Item key={i1}><Link to={e1?.to}>{e1.title}</Link></Menu.Item>)
              })}
          
        </SubMenu>
          )
        })}
      </Menu>
    </Sider>
  );
};

export default LeftNav;
