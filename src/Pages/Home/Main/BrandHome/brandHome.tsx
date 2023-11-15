import React from "react";
import classNames from "classnames/bind";

import styled from "./BrandHome.module.scss";
import SlideImages from "./SlideImages/SlideImages";

const cx = classNames.bind(styled);

const BrandHome = () => {
  return (
    <div className={cx("brand-home")}>
      <div className={cx("container")}>
        <div className={cx("title-home")}>
            <h2 className={cx('title')}>Được tin tưởng bởi:</h2>
        </div>

      <div className={cx('content-home')}>
        <div
        className={cx('brand-slider')}>
          <SlideImages />
        </div>
      </div>
      </div>
    </div>
  );
};

export default BrandHome;
