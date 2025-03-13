import AboutArea from "@/src/common/about-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import HeroBanner from "../../common/hero-banner";
import CtaArea from "../contact/cta-area";
import TeamArea from "../homes/home-4/team-area";
import Brand from "./brand";
import CompanyArea from "./company-area";
import JobArea from "./job-area";
import JourneyArea from "./journey-area";
 
const About = () => {
  return (
    <>
      <Header />
      <Breadcrumb title_top="About"  title_bottom="Gadr Digital" />
      <HeroBanner title="About" subtitle="Gadr Digital" bg_img="/assets/img/breadcrumb/breadcrumb-2.jpg" />
      <Brand />
      <CompanyArea />
      <AboutArea />
     {/* <TeamArea bg_style={true} /> */} 
     {/* <JourneyArea /> */} 
    {/* <JobArea /> */}  
      <CtaArea />
      <Footer/>
    </>
  );
};

export default About;
