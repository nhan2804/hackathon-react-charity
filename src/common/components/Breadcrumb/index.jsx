import { Route, Switch, Link, withRouter } from "react-router-dom";
import { Breadcrumb, Alert } from "antd";
import React from "react";

const breadcrumbNameMap = {
  "/project": "Dự án",
  "/project/shared": "Dự án được chia sẻ",
  "/project/me": "Dự án của tôi",
  "/project/30/feedback": "Feedback",
  "/apps/2/detail": "Detail",
};
const CustomBreadcrumb = withRouter((props) => {
  const { location } = props;
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>;
});
export default CustomBreadcrumb;
