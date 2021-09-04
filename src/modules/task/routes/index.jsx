import Task from "../pages";
import ShowTask from "../pages/show";

const tasktRoutes = [
  {
    component: Task,
    path: "/project/:id/tasks",
    exact: true,
  },
  {
    component: ShowTask,
    path: "/project/:id/tasks/:id",
    exact: true,
  },
];
export default tasktRoutes;
