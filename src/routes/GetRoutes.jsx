import ProtectedRoute from "@components/ProtectedRoute";
import React, { memo, Suspense, lazy } from "react";

import { Route } from "react-router";

import { Switch } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

import Routes from "./index";
const NotFound = lazy(() => import("@components/NotFound"));
function GetRoutes() {
  return (
    <div className="h-full">
      <Suspense
        fallback={
          <div className="flex items-center justify-center max-w-lg min-h-full mx-auto">
            <PacmanLoader loading={true} size={60} />
          </div>
        }
      >
        <Switch>
          {Routes.map((route, indx) => {
            const { path, component, isPrivate = false, role, exact } = route;
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
          <Route component={NotFound}></Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default memo(GetRoutes);
