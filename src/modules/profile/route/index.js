import { lazy } from "react";

const Profile = lazy(() => import("../pages/profile"));
const profileRoute = [
  {
    path: "/profile",
    component: Profile,
    exact: true,
    isPrivate: true,
  },
];
export default profileRoute;
