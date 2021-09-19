import { lazy } from "react";
const Upgrade = lazy(() => import("../pages/upgrade"));

const othersRoutes = [
  {
    component: Upgrade,
    path: "/upgrade",
    isPrivate: true,
    exact: true,
  },
];
export default othersRoutes;
