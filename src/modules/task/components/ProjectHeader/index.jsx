import usePermission from "@hooks/usePermission";
import AssignStaffSection from "@modules/project/components/AssignStaffSection";
import { Button, PageHeader } from "antd";
import React from "react";
import { useHistory } from "react-router";
import AddClientSection from "../AddClientSection";
import CreateTaskSection from "../CreateTaskForm";

const ProjectHeader = ({ projectId }) => {
  const history = useHistory();
  const { data } = usePermission(projectId);
  return (
    <PageHeader
      title="Project"
      className="bg-white"
      onBack={() => history.goBack()}
      ghost={false}
      extra={[
        <CreateTaskSection projectId={projectId} />,
        <AssignStaffSection projectId={projectId} />,
        <Button
          // type="primary"
          onClick={() => history.push(`/project/${projectId}/feedback`)}
        >
          FeedBack
        </Button>,
        // <AddClientSection />,
      ]}
    />
  );
};

export default ProjectHeader;
