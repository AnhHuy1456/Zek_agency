import React from "react";
import classNames from "classnames/bind";
import styles from "./HeaderLogo.module.scss";

import Logo from '../../../assets/images/logo.png'

const cx = classNames.bind(styles);
const HeaderLogo = () => {
  return (
    <div className={cx("header-logo")}>
      <a href="/" className={cx("logo")}>
        <img
          src={Logo}
          alt="Zek Agency"
        />
      </a>
    </div>
  );
};

export default HeaderLogo;
