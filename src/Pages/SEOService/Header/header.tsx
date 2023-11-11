import React, {useEffect} from "react";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import HeaderLogo from "./HeaderMain/headerLogo";
import HeaderBtn from "./HeaderMain/headerBtn";

const cx = classNames.bind(styles);

const Header = () => {
  //! Props

  //! ueState

  //! Function
  const showAlert = () => {
    <div className={cx("header-transparent")}>
      <div className={cx("containers")}>
        <div className={cx("row")}>
          <HeaderLogo />
          <HeaderBtn />
        </div>
      </div>
    </div>
  };
  

  //! useEffect

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 150) {
        showAlert();
      }
      
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //! Render
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
