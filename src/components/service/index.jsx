import Breadcrumb from "@/src/common/breadcrumbs/breadcrumb";
import HeroBanner from "@/src/common/hero-banner";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react"; 
import CardArea from "../../common/card-area";
import SalesArea from "../../common/sales-area";
import TestimonialArea from "../../common/testimonial-area";
import CtaArea from "../contact/cta-area";
import FaqArea from "../homes/home-2/faq-area";
import ServiceArea from "./service-area";

const Service = () => {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title_top={"Our Top"} title_bottom={"Service"} />
            <HeroBanner title="Our Top" subtitle="Service" bg_img="/assets/img/breadcrumb/breadcrumb-2.jpg" />
            <ServiceArea /> 
            <CardArea style_service={true} />
            <SalesArea style_service={true} />
           {/* <TestimonialArea /> */} 
            <FaqArea style_service={true} />
            <CtaArea />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Service;
