import SectionSkeleton from "@components/Skeleton";
import CreateFeedbackForm from "@modules/feedback/components/CreateFeedbackForm";
import FeedbackItem from "@modules/feedback/components/FeedbackItem";
import useGetFeedBack from "@modules/feedback/hooks/useGetFeedBack";
import AddClientSection from "@modules/feedback/components/AddClientSection";
import { Breadcrumb, Layout, PageHeader } from "antd";
import React from "react";
import { useHistory, useParams } from "react-router";
import ListClient from "@modules/feedback/components/ListClient";
import usePermission from "@hooks/usePermission";
import { Link } from "react-router-dom";
const { Content } = Layout;

const Feedback = () => {
  let { projectId } = useParams();
  const history = useHistory();
  const { data: feedbacks, isLoading } = useGetFeedBack(projectId);
  const { data } = usePermission(projectId);
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
    <Breadcrumb.Item key="project">
      <Link to="/project">Dự án</Link>
    </Breadcrumb.Item>,
    <Breadcrumb.Item key="feedback">
      <Link to={`/project/${projectId}/feedback`}>Feedback</Link>
    </Breadcrumb.Item>,
  ];
  return (
    <Layout className="h-full">
      <Content className="h-full bg-white">
        <PageHeader
          title={
            <div className="flex items-center space-x-1">
              <div>Feedbacks</div>
              {data?.project?.can_add_client && (
                <AddClientSection projectId={projectId} />
              )}
            </div>
          }
          onBack={() => history.goBack()}
        />
        <div className="mx-5">
          <Breadcrumb>{breadcrumbItems}</Breadcrumb>
        </div>

        <div className="grid grid-cols-4 gap-3 px-6">
          {[...Array(10)].map((e) => {
            return <SectionSkeleton rows={10} isLoading={isLoading} />;
          })}

          {feedbacks?.map((fb, idx) => (
            <FeedbackItem key={fb?.id_feedback} fb={fb} />
          ))}

          {data?.feedback?.can_create && <CreateFeedbackForm />}
        </div>
      </Content>
    </Layout>
  );
};
export default Feedback;
