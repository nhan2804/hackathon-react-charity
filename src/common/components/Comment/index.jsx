import React, { createElement, useState } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";

const CommentItem = ({item}) => {
 console.log(item);
  return (
    <Comment
      //   actions={actions}
      author={<Link to="/">{item?.user?.username}</Link>}
      avatar={
        <Avatar
          src={item?.user?.avatar}
          alt={item?.user?.username}
        />
      }
      content={<p>{item?.desc_comment}</p>}
      datetime={
        <Tooltip title={moment(item?.created_at).format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment(item?.created_at).fromNow()}</span>
        </Tooltip>
      }
    />
  );
};
export default CommentItem;
