import { lazy } from "react";

const ProjectShared = lazy(() => import("../pages/shared"));
const Project = lazy(() => import("../pages/projects"));
const projectRoutes = [
  {
    component: Project,
    path: "/project",
    exact: true,
  },
  {
    component: ProjectShared,
    path: "/project/shared",
    exact: true,
  },
];
export default projectRoutes;
