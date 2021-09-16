import CommentItem from "@components/Comment";
import useGetTaskComment from "@modules/task/hooks/useGetTaskComment";
import React, { useEffect, useRef } from "react";
import { List, Skeleton } from "antd";
const ListComment = ({ taskId }) => {
  const { data, isLoading } = useGetTaskComment(taskId);
  // const divRef = useRef(null);
  // useEffect(() => {
  //   divRef.current.scrollIntoView({ behavior: "smooth" });
  // });
  return (
    <>
      {isLoading ? (
        <Skeleton active />
      ) : (
        <div className="min-h-full overflow-auto max-h-0">
          <List
            rowKey={(item) => item?.id_comment}
            dataSource={data}
            itemLayout="horizontal"
            renderItem={(item) => <CommentItem item={item} />}
          />
        </div>
      )}
    </>
  );
};

export default ListComment;
