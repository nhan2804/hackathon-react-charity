import CommentItem from "@components/Comment";
import { Progress, Tag,List } from "antd";
import React from "react";
import CreateCommentFeedBackForm from "../CreateCommentFeedBackForm";

const FeedbackItem = ({fb}) => {
  console.log(fb?.comments);
  return (
    <div className="p-2 bg-gray-100 rounded shadow">
      <div className="flex justify-between">
        <div className="space-x-1">
          <div className="inline-block text-lg font-semibold">{fb?.name_feedback}</div>
          <Tag color="blue">Mở</Tag>
        </div>

        <Progress type="circle" percent={Number(fb?.percent_feedback || 0)} width={30} />
      </div>
      <div>{fb?.desc_feedback}</div>
      <div>
        <CreateCommentFeedBackForm feedbackID={fb?.id_feedback}/>
      <List
      dataSource={fb?.comments}
      itemLayout="horizontal"
      renderItem={(item) => <CommentItem item={item} />}
    />
      </div>
    </div>
  );
};

export default FeedbackItem;
