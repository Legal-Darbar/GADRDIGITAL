import React from "react";
import SEO from "../common/seo";
import HomeTwo from "../components/homes/home-2";
import Wrapper from "../layout/wrapper";
import  Modal from "../forms/popup";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Gadr Digital - Perfect Software Partner"} />
      <HomeTwo />
      < Modal/>
    </Wrapper>
  );
};

export default index;
