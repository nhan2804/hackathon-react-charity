import { lazy } from "react";
// import CreateCharity from "../pages/charity/create";

const Admin = lazy(() => import("../pages/"));
const CreateCharity = lazy(() => import("../pages/charity/create"));

const adminRoutes = [
  {
    component: Admin,
    path: "/admin",
    exact: true,
  },
  {
    component: CreateCharity,
    path: "/admin/charity/create",
    exact: true,
  },
];
export default adminRoutes;
