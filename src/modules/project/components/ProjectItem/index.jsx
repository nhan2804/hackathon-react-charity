import React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const ProjectItem = () => {
  return (
    <Card
      cover={
        <img
          alt="example"
          src={`https://picsum.photos/id/${
            Math.floor(Math.random() * 1000) + 1
          }/200/150`}
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={
          <Avatar
            src={`https://picsum.photos/id/${
              Math.floor(Math.random() * 1000) + 1
            }/200/300`}
          />
        }
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
};

export default ProjectItem;
