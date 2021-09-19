import { Avatar } from "antd";
import React from "react";
import useGetProfile from "@modules/auth/hooks/useGetProfile";
import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@hooks/reduxHook";
import { logout } from "@modules/auth/slices";
const UserMenu = () => {
  const { data: profile } = useGetProfile();
  const dispatch = useAppDispatch();
  return (
    <Popover as="div" className="relative z-10">
      <Popover.Button>
        <Avatar src={profile?.avatar} />
      </Popover.Button>
      <Popover.Panel className="absolute right-0 w-48 p-3 bg-white rounded shadow top-full">
        <Link to="/profile" className="block text-base text-black">
          Thông tin cá nhân
        </Link>
        <button
          className="block text-base text-black"
          onClick={() => dispatch(logout())}
        >
          Đăng xuất
        </button>
      </Popover.Panel>
    </Popover>
  );
};

export default UserMenu;
