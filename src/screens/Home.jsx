import React from "react";
import Layout from "../components/Layout";
import CarouselCard from "../components/Carousel";
import Mobile from "../components/Mobile";

export default function Home(props) {
  return (
    <Layout themeMode={props.themeMode} toggleColorMode={props.toggleColorMode}>
      <Mobile />
      <CarouselCard />
    </Layout>
  );
}
