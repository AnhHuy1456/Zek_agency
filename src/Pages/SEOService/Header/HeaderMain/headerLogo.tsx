import React from "react";
import classNames from "classnames/bind";
import styles from "./HeaderLogo.module.scss";

const cx = classNames.bind(styles);
const HeaderLogo = () => {
  return (
    <div className={cx("header-logo")}>
      <a href="/" className={cx("logo")} >
        <img
          src="https://zek.vn/storagezek/2021/11/logo.png"
          alt="Zek Agency"
        />
      </a>
    </div>
  );
};

export default HeaderLogo;
