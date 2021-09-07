import authRoute from "@modules/auth/routes";
import feedbackRoute from "@modules/feedback/routes";
import projectRoutes from "@modules/project/routes";
import tasktRoutes from "@modules/task/routes";
const routes = [
  ...authRoute,
  ...projectRoutes,
  ...tasktRoutes,
  ...feedbackRoute,
];
export default routes;
