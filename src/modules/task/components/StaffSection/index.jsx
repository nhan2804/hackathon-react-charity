import { Avatar, Tag } from "antd";
import React from "react";
import EditStaffSection from "./EditStaffSection";
const StaffSection = ({ staff, taskId, projectId }) => {
  return (
    <div className="flex items-center justify-between space-x-2">
      <div className="space-x-2">
        <Avatar alt={staff?.fullname} src={staff?.avatar} />
        <Tag color="magenta">{staff?.fullname}</Tag>
      </div>
      <div className="space-x-2">
        <EditStaffSection taskId={taskId} projectId={projectId} />

        {/* <Button
          icon={<DeleteOutlined />}
          shape="circle"
          danger
          //   onClick={() => deleteTodo({ id_todo })}
        /> */}
      </div>
    </div>
  );
};

export default StaffSection;
