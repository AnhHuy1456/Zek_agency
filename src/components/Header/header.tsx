import React from "react";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import HeaderLogo from "./HeaderMain/headerLogo";
import HeaderBtn from "./HeaderMain/headerBtn";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx("header")}>
      <div className={cx("containers")}>
        <div className={cx("row")}>
          <HeaderLogo />
          <HeaderBtn />
        </div>
      </div>
    </div>
  );
};

export default Header;
