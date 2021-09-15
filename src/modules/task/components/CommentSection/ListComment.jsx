import CommentItem from "@components/Comment";
import useGetTaskComment from "@modules/task/hooks/useGetTaskComment";
import React from "react";
import { List, Skeleton } from "antd";
const ListComment = ({ taskId }) => {
  const { data, isLoading } = useGetTaskComment(taskId);
  return (
    <>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <List
          className="min-h-full overflow-auto max-h-0"
          rowKey={(item) => item?.id_comment}
          dataSource={data}
          itemLayout="horizontal"
          renderItem={(item) => <CommentItem item={item} />}
        />
      )}
    </>
  );
};

export default ListComment;
