import React from "react";
import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";

const layout = ({ children }) => {
  return (
    <div className="min-h-screen grid grid-cols-12 bg-black-3">
      <LeftSidebar />
      {children}
      <RightSidebar />
    </div>
  );
};

export default layout;
