import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));

const homeRoute = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
];
export default homeRoute;
