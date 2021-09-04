import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
// import "./index.css";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const TaskMenu = () => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => {
    setCollapse(!collapse);
  };
  return (
    <Sider width={300} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%", borderRight: 0 }}
      >
        {[...Array(15)].map((e, i) => {
          return (
            <Menu.Item key={i}>
              <Link to={`tasks/${i + 1}`}>
                {`Công việc ${i + 1}`} | {`Ngọc Nhẫn ${i + 1}`} |
                {`Time end ${i + 1}`}
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default TaskMenu;
