import { useAppSelector } from "@hooks/reduxHook";
import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const ProtectedRoute = ({
  path,
  component: Component,
  exact,
  isPrivate,
  accessRole,
  ...rest
}) => {
  const auth = useAppSelector((state) => state.auth.isAuth, shallowEqual);
  const role = useAppSelector((state) => state.auth.user?.role, shallowEqual);
  return (
    <Route
      render={(props) => {
        if (!isPrivate) return <Component {...props} />;
        if (!auth) return <Redirect to="/login" />;
        if (!accessRole) return <Component {...props} />;
        if (!accessRole.includes(role)) return <Redirect to="/" />;
        return <Component {...props} />;
      }}
      {...rest}
    />
  );
};

export default memo(ProtectedRoute);
