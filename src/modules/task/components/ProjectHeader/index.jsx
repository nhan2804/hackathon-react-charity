import usePermission from "@hooks/usePermission";
import AssignStaffSection from "@modules/project/components/AssignStaffSection";
import useGetProjectDetail from "@modules/project/hooks/useGetProjectDetail";
import { Button, PageHeader } from "antd";
import React from "react";
import { useHistory } from "react-router";
import CreateTaskSection from "../CreateTaskForm";

const ProjectHeader = ({ projectId, breadcrumbs, title }) => {
  // const {} =
  const history = useHistory();
  // const { data } = usePermission(projectId);
  const { data: project } = useGetProjectDetail(projectId);
  return (
    <PageHeader
      title={`Project - ${project?.name_project}`}
      className="bg-white"
      onBack={() => history.goBack()}
      breadcrumb={breadcrumbs}
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
