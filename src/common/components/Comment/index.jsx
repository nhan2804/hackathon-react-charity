import React from "react";
import { Comment, Tooltip, Avatar, Image } from "antd";
import moment from "moment";
import { Link } from "react-router-dom";
import "./style.css";
import urlify from "@helper/urlify";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import getLink from "@helper/getLinkFromText";
import { youtube_parser } from "@helper/getLinkYoutube";
const CommentItem = React.memo(({ item }) => {
  const link = () => {
    return getLink(item?.desc_comment);
  };
  const iDYoutube = youtube_parser(link());
  return (
    <Comment
      author={<Link to="/">{item?.user?.fullname || item?.user?.email}</Link>}
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

          {link() &&
            (iDYoutube ? (
              <iframe
                width="350"
                height="auto"
                src={`https://www.youtube.com/embed/${iDYoutube}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowfullscreen
              ></iframe>
            ) : (
              <LinkPreview url={link()} className="max-w-full" width="350px" />
            ))}
          <div
            dangerouslySetInnerHTML={{ __html: urlify(item?.desc_comment) }}
          ></div>
          <Image.PreviewGroup>
            {item?.files_comment?.map((img) => (
              <Image
                src={img}
                previewPrefixCls="inline"
                preview={{ maskClassName: "inline" }}
              />
            ))}
          </Image.PreviewGroup>
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
