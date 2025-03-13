import React from "react";
import SEO from "../common/seo";
import BlogDetails from "../components/blog-details";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Gadr Digital"} />
      <BlogDetails />
    </Wrapper>
  );
};

export default index;
