import React from "react";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const ProjectItem = ({ item }) => {
  return (
    <Card
      cover={
        <img
          style={{ maxHeight: 200 }}
          alt="example"
          src={item?.thumb_project}
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={<Avatar src={item?.thumb_project} />}
        title={item?.name_project}
        description={item?.desc_project?.substring(0, 50) + "..."}
      />
    </Card>
  );
};

export default ProjectItem;
