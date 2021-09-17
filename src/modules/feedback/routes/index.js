import { lazy } from "react";

const Feedback = lazy(() => import("../pages/feedback"));
const feedbackRoute = [
  {
    path: "/project/:projectId/feedback",
    component: Feedback,
    exact: true,
    isPrivate: true,
  },
];
export default feedbackRoute;
