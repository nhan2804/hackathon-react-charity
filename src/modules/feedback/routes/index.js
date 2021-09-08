import Feedback from "../pages/feedback";

const feedbackRoute = [
  { path: "/project/:projectId/feedback", component: Feedback, exact: true },
];
export default feedbackRoute;
