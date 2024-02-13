import React from "react";
import Layout from "../components/Layout";

export default function Home(props) {
  return (
    <Layout
      themeMode={props.themeMode}
      toggleColorMode={props.toggleColorMode}
    ></Layout>
  );
}
