import authRoute from "@modules/auth/routes";
import profileRoute from "@modules/profile/route";
import homeRoute from "@modules/home/routes";
const routes = [...authRoute, ...profileRoute, ...homeRoute];
export default routes;
