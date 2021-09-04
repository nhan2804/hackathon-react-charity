import authRoute from "@modules/auth/routes";
import projectRoutes from "@modules/project/routes";
const routes = [...authRoute, ...projectRoutes];
export default routes;
