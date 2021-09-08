import { Divider } from "antd";
import React from "react";
import CreateCommentForm from "./CreateCommentForm";
import ListComment from "./ListComment";

const CommentSection = ({ id }) => {
  return (
    <div>
      <Divider orientation="left">Bình luận</Divider>
      <ListComment taskId={id} />
      <CreateCommentForm taskId={id} />
    </div>
  );
};

export default CommentSection;
