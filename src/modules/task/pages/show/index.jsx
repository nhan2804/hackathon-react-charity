import CommentItem from "@components/Comment";
import {
  Breadcrumb,
  Divider,
  Layout,
  Menu,
  List,
  Typography,
  Checkbox,
} from "antd";
import React, { useState } from "react";
// import "./index.css";
import TaskMenu from "../../components/TaskMenu";
// import "react-big-calendar/lib/css/react-big-calendar.css";
const { Header, Sider, Content } = Layout;
// const localizer = momentLocalizer(moment);
const ShowTask = () => {
  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];

  return (
    <Layout className="h-full">
      <TaskMenu />
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Divider orientation="left">Danh sách công việc</Divider>
            <List
              header={<div>Header</div>}
              bordered
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text>
                    <Checkbox checked={true}></Checkbox>
                  </Typography.Text>
                  {item}
                </List.Item>
              )}
            />
          </div>
          <div>
            <Divider orientation="left">Bình luận</Divider>
            <CommentItem />
          </div>
        </div>
      </Content>
    </Layout>
  );
};
export default ShowTask;
