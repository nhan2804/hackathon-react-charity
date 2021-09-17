import { lazy } from "react";

const ProjectShared = lazy(() => import("../pages/shared"));
const ProjectMe = lazy(() => import("../pages/me"));

const Project = lazy(() => import("../pages/projects"));
const projectRoutes = [
  {
    component: Project,
    path: "/project",
    exact: true,
    isPrivate: true,
  },
  {
    component: ProjectShared,
    path: "/project/shared",
    isPrivate: true,
    exact: true,
  },
  {
    component: ProjectMe,
    path: "/project/me",
    isPrivate: true,
    exact: true,
  },
];
export default projectRoutes;
