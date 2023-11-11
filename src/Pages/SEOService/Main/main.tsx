import React from "react";
import classNames from "classnames/bind";

import BannerPages from "./Bannerpages/bannerPages";
import ServiceCeo from "./ServiceSeo/serviceCeo";
import styles from "./Main.module.scss";
import BenefitSeo from "./BenefitSeo/benefitSeo";
import DeploymentSeo from "./DeploymentSep/deploymentSeo";
import QuoteSeo from "./QuoteSeo/quoteSeo";
import OrtherService from "./OrtherService/ortherService";
import Review from "./Review/review";

const cx = classNames.bind(styles);

const Main = () => {
  return (
    <>
      <div className={cx("main")}>
        <BannerPages />

        <ServiceCeo />

        <BenefitSeo />

        <DeploymentSeo />

        <QuoteSeo />

        <OrtherService />

        <Review />
      </div>
    </>
  );
};

export default Main;
