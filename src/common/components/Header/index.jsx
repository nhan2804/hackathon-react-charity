import { Button, Layout, Menu } from "antd";
import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@hooks/reduxHook";
import { logout } from "@modules/auth/slices";
const { Header } = Layout;

const HeaderNav = () => {
  const user = useAppSelector((store) => store?.auth?.user);
  const dispatch = useAppDispatch();
  return (
    <Header className="flex justify-between">
      <div className="logo"></div>

      <Menu theme="dark" mode="horizontal" className="justify-center flex-grow">
        <Menu.Item>
          <Link to="/project">Dự án của tôi</Link>
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
        <div className="space-x-2">
          <Button type="primary" onClick={() => dispatch(logout())}>
            Đăng xuất
          </Button>
        </div>
      )}
    </Header>
  );
};

export default HeaderNav;
