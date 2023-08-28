import React from "react";
import {
  Navbar,
  HomeBanner,
  Companies,
  Discover,
  Category,
  Learn,
  GooglePlay,
  Footer,
} from "../../../components/export";

const HomePublic = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <Companies />
      <Discover />
      <Category />
      <Learn />
      <GooglePlay />
      <Footer />
    </>
  );
};

export default HomePublic;
