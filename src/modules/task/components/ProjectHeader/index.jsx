import { Button, PageHeader } from "antd";
import React from "react";
import { useHistory } from "react-router";
import CreateTaskSection from "../CreateTaskForm";

const ProjectHeader = () => {
  const history = useHistory();
  return (
    <PageHeader
      title="Project"
      className="bg-white"
      onBack={() => history.goBack()}
      ghost={false}
      extra={[
        <CreateTaskSection />,
        <Button type="primary">Thêm nguời dùng</Button>,
        <Button type="primary">Thêm FeedBack</Button>,
      ]}
    />
  );
};

export default ProjectHeader;
