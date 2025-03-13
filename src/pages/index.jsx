import React from "react";
import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";
import  Modal from "../forms/popup";

const Home = () => {

  return (
    <Wrapper>
      <SEO pageTitle={"Gadr Digital"} />
      <HomeOne />
     
    </Wrapper>
  );
};

export default Home;
