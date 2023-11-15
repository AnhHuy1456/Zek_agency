import React from "react";
import BannerHome from "./BannerHome/bannerHome";
import BrandHome from "./BrandHome/brandHome";
import ServiceHome from "./ServiceHome/serviceHome";
import Review from "../../SEOService/Main/Review/review";
import WhyHome from "./WhyHome/whyHome";

const Main = () => {
  return (
    <>
      <BannerHome />
      <BrandHome />
      <ServiceHome />
      <WhyHome />
      <Review />
    </>
  );
};

export default Main;
