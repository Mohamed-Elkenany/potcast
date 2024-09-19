import React from "react";

const layout = ({ children }) => {
  return (
    <section className="auth-page flex items-center justify-center">
      {children}
    </section>
  );
};

export default layout;
