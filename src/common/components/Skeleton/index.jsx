import { Skeleton } from "antd";
import React from "react";

const SectionSkeleton = ({ isLoading, rows = 4 }) => {
  return <>{isLoading ? <Skeleton paragraph={{ rows: rows }} /> : ""}</>;
};

export default SectionSkeleton;
