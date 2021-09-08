import CommentItem from "@components/Comment";
import useGetTaskComment from "@modules/task/hooks/useGetTaskComment";
import React from "react";
import { List } from "antd";
const ListComment = ({ taskId }) => {
  const { data } = useGetTaskComment(taskId);
  return (
    <List
      dataSource={data}
      itemLayout="horizontal"
      renderItem={(item) => <CommentItem desc={item?.desc_comment} />}
    />
  );
};

export default ListComment;
