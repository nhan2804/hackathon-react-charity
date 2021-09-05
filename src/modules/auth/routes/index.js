import { lazy } from "react";

const Login = lazy(() => import("../pages/login"));
const Register = lazy(() => import("../pages/register"));

const authRoutes = [
  {
    component: Login,
    path: "/login",
  },
  {
    component: Register,
    path: "/register",
  },
];
export default authRoutes;
