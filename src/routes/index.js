import authRoute from "@modules/auth/routes";
import projectRoutes from "@modules/project/routes";
import tasktRoutes from "@modules/task/routes";
const routes = [...authRoute, ...projectRoutes, ...tasktRoutes];
export default routes;
