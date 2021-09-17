import SectionSkeleton from "@components/Skeleton";
import CreateFeedbackForm from "@modules/feedback/components/CreateFeedbackForm";
import FeedbackItem from "@modules/feedback/components/FeedbackItem";
import useGetFeedBack from "@modules/feedback/hooks/useGetFeedBack";
import AddClientSection from "@modules/feedback/components/AddClientSection";
import { Layout, PageHeader } from "antd";
import React from "react";
import { useHistory, useParams } from "react-router";
import ListClient from "@modules/feedback/components/ListClient";
import usePermission from "@hooks/usePermission";
const { Content } = Layout;

const Feedback = () => {
  let { projectId } = useParams();
  const history = useHistory();
  const { data: feedbacks, isLoading } = useGetFeedBack(projectId);
  const { data } = usePermission(projectId);

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
