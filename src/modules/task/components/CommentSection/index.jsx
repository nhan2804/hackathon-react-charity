import { Divider } from "antd";
import React from "react";
import CreateCommentForm from "./CreateCommentForm";
import ListComment from "./ListComment";

const CommentSection = () => {
  return (
    <div>
      <Divider orientation="left">Bình luận</Divider>
      <ListComment />
      <CreateCommentForm />
    </div>
  );
};

export default CommentSection;
