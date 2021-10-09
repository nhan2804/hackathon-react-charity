import authRoute from "@modules/auth/routes";
import profileRoute from "@modules/profile/route";
import homeRoute from "@modules/home/routes";
import adminRoutes from "@modules/admin/routes";
const routes = [...authRoute, ...profileRoute, ...homeRoute, ...adminRoutes];
export default routes;
