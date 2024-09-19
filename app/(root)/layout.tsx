import React from "react";
import LeftSidebar from "../../components/LeftSidebar";
import RightSidebar from "../../components/RightSidebar";

const layout = ({ children }) => {
  return (
    <div className="min-h-screen grid grid-cols-12">
      <LeftSidebar />
      <div className=" col-span-8">
      {children}
      </div>
      <RightSidebar />
    </div>
  );
};

export default layout;
