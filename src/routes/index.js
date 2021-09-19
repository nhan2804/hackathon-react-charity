import authRoute from "@modules/auth/routes";
import feedbackRoute from "@modules/feedback/routes";
import profileRoute from "@modules/profile/route";
import projectRoutes from "@modules/project/routes";
import tasktRoutes from "@modules/task/routes";
import othersRoutes from "@modules/upgrade/routes";
const routes = [
  ...authRoute,
  ...projectRoutes,
  ...tasktRoutes,
  ...feedbackRoute,
  ...profileRoute,
  ...othersRoutes,
];
export default routes;
