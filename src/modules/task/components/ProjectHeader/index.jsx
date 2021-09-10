import AssignStaffSection from "@modules/project/components/AssignStaffSection";
import { Button, PageHeader } from "antd";
import React from "react";
import { useHistory } from "react-router";
import CreateTaskSection from "../CreateTaskForm";

const ProjectHeader = ({ projectId }) => {
  const history = useHistory();
  return (
    <PageHeader
      title="Project"
      className="bg-white"
      onBack={() => history.goBack()}
      ghost={false}
      extra={[
        <CreateTaskSection projectId={projectId} />,
        <AssignStaffSection/>,
        <Button
          type="primary"
          onClick={() => history.push(`/project/${projectId}/feedback`)}
        >
          Thêm FeedBack
        </Button>,
      ]}
    />
  );
};

export default ProjectHeader;
