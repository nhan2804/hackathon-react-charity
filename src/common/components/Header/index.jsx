import { Badge, Button, Layout, Menu } from "antd";
import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useAppSelector } from "@hooks/reduxHook";
// import { logout } from "@modules/auth/slices";
import UserMenu from "./UserMenu";
import logo from "@assets/images/logo.jpg";
const { Header } = Layout;

const HeaderNav = () => {
  const user = useAppSelector((store) => store?.auth?.user);
  // const dispatch = useAppDispatch();
  return (
    <Header className="flex justify-between">
      <div className="logo">
        <img
          src={
            "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
          }
          alt="logo"
        />
      </div>

      <Menu
        theme="dark"
        mode="horizontal"
        className="justify-center flex-grow text-white"
      >
        <Menu.Item>
          <Link to="/project">Trang chủ</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/upgrade">
            <Badge count={1}>
              <span className="text-white">Admin</span>
            </Badge>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/upgrade">Ủng hộ</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/upgrade">Giới thiệu</Link>
        </Menu.Item>
      </Menu>
      {!user ? (
        <div className="space-x-2">
          <Button type="primary">
            <Link to="/login">Đăng nhập</Link>
          </Button>
          <Button type="link">
            <Link to="/register">Đăng ký</Link>
          </Button>
        </div>
      ) : (
        <UserMenu />
      )}
    </Header>
  );
};

export default HeaderNav;
