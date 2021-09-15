import React, { createElement, useState } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
import "./style.css";
import urlify from "@helper/urlify";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import getLink from "@helper/getLinkFromText";
import validateYouTubeUrl from "@helper/getLinkYoutube";
const CommentItem = React.memo(({ item }) => {
const link=()=>{
  return getLink(item?.desc_comment);
}
  return (
    <Comment
      //   actions={actions}
      author={<Link to="/">{item?.user?.username}</Link>}
      avatar={<Avatar src={item?.user?.avatar} alt={item?.user?.username} />}
      content={
        <>
          {/* {validateYouTubeUrl(getLink(item?.desc_comment)) && (
            <iframe
              title="This is a unique title"
              width="500"
              height="265"
              frameborder="0"
              src={validateYouTubeUrl(getLink(item?.desc_comment))}
              allowfullscreen
            ></iframe>
          )} */}
          
          {link() && <LinkPreview url={link()} className="max-w-full" width="350px" />
          }
          <div
            dangerouslySetInnerHTML={{ __html: urlify(item?.desc_comment) }}
          ></div>
        </>
      }
      datetime={
        <Tooltip title={moment(item?.created_at).format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment(item?.created_at).fromNow()}</span>
        </Tooltip>
      }
    />
  );
});
export default CommentItem;
