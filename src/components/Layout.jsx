import React from "react";

function Layout(props) {
  const defaultContainer = "w-screen flex";
  return (
    <div
      className={
        props.themeMode === "dark"
          ? defaultContainer + "bg-gray-800"
          : defaultContainer + "bg-neutral-100"
      }
    >
      <div className="w-full relative">
        <div className="pt-10">{props.children}</div>
      </div>
    </div>
  );
}

export default Layout;
