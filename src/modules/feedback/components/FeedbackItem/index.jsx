import CommentItem from "@components/Comment";
import { Progress, Tag } from "antd";
import React from "react";

const FeedbackItem = () => {
  return (
    <div className="p-2 bg-gray-100 rounded shadow">
      <div className="flex justify-between">
        <div className="space-x-1">
          <div className="inline-block text-lg font-semibold">Name</div>
          <Tag color="blue">Mở</Tag>
        </div>

        <Progress type="circle" percent={30} width={30} />
      </div>
      <div>Miee tar neffffff</div>
      <div>
        <CommentItem />
      </div>
    </div>
  );
};

export default FeedbackItem;
