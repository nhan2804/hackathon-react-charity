import React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Meta } = Card;
const ProjectItem = ({ item }) => {
  return (
    <Card
      cover={
        <Link
          className="block w-full h-full"
          to={`/project/${item?.id_project}/tasks`}
        >
          <img
            style={{ maxHeight: 200 }}
            className="object-cover w-full h-full"
            alt="example"
            src={item?.thumb_project}
          />
        </Link>
      }
      actions={[
        <DeleteOutlined key="delete" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar alt="d" src={item?.user?.avatar} />}
        title={item?.name_project}
        description={item?.desc_project}
      />
    </Card>
  );
};

export default ProjectItem;
