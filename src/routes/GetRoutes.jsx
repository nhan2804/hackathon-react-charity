import ProtectedRoute from "@components/ProtectedRoute";
import { Layout } from "antd";
import React, { memo, Suspense } from "react";

import { Switch } from "react-router-dom";

import Routes from "./index";

function GetRoutes() {
  return (
    <div className="h-full">
      <Suspense
        fallback={
          <div id="loader-wrapper">
            <div id="loader"></div>
          </div>
        }
      >
        <Switch>
          {Routes.map((route, indx) => {
            const {
              path,
              component,
              isPrivate = false,
              role = [],
              exact,
            } = route;
            // return <Route key={indx} path={path} exact={true} component={component} />;
            return (
              <ProtectedRoute
                key={path}
                path={path}
                exact={exact}
                component={component}
                isPrivate={isPrivate}
                accessRole={role}
              />
            );
          })}
        </Switch>
      </Suspense>
    </div>
  );
}

export default memo(GetRoutes);
