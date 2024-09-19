import React from "react";
import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";

const layout = ({ children }) => {
  return (
    <div>
      <LeftSidebar />
      {children}
      <RightSidebar />
    </div>
  );
};

export default layout;
