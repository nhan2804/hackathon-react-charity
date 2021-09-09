import CreateFeedbackForm from "@modules/feedback/components/CreateFeedbackForm";
import FeedbackItem from "@modules/feedback/components/FeedbackItem";
import useGetFeedBack from "@modules/feedback/hooks/useGetFeedBack";
import { Layout, PageHeader } from "antd";
import React from "react";
import { useHistory, useParams } from "react-router";
const { Content } = Layout;

const Feedback = () => {
    let { projectId } = useParams();
  const history = useHistory();
  const {data:feedbacks}= useGetFeedBack(projectId)
  return (
    <Layout className="h-full">
      <Content className="h-full bg-white">
        <PageHeader title="Feedback" onBack={() => history.goBack()} />

        <div className="grid grid-cols-4 gap-3 px-6">
          {feedbacks?.map((fb,idx) => (
            <FeedbackItem fb={fb} />
          ))}
          
          <CreateFeedbackForm />
        </div>
      </Content>
    </Layout>
  );
};
export default Feedback;
