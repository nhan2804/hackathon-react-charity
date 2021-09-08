import CreateFeedbackForm from "@modules/feedback/components/CreateFeedbackForm";
import FeedbackItem from "@modules/feedback/components/FeedbackItem";
import { Layout, PageHeader } from "antd";
import React from "react";
import { useHistory, useParams } from "react-router";
const { Content } = Layout;

const Feedback = () => {
  //   let { id } = useParams();
  const history = useHistory();
  return (
    <Layout className="h-full">
      <Content className="h-full bg-white">
        <PageHeader title="Feedback" onBack={() => history.goBack()} />

        <div className="grid grid-cols-4 gap-3 px-6">
          {[...Array(6)].map(() => (
            <FeedbackItem />
          ))}
          <CreateFeedbackForm />
        </div>
      </Content>
    </Layout>
  );
};
export default Feedback;
