import React from "react";
import Navbar from "./Navbar";

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
        <div className="">{props.children}</div>
      </div>
      <Navbar
        themeMode={props.themeMode}
        toggleColorMode={props.toggleColorMode}
      />
    </div>
  );
}

export default Layout;
