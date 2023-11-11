import React from "react";
import { animateScroll as scroll } from 'react-scroll';


import Header from "./Header/header";
import Main from "./Main/main";
import styles from "./SeoService.module.scss";
import classNames from "classnames/bind";
import Footer from "./Footer/footer";

const cx = classNames.bind(styles);

const SeoService = () => {


  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <header className={cx("header")}>
        <Header />
      </header>
      <main className={cx("main")}>
        <Main />
      </main>
      <footer className={cx("footer")}>
        <Footer />
      </footer>
      <div id={cx("back-top")}>
        <div className={cx('scroll')} onClick={scrollToTop} >
          <i className={cx("icon-up")}></i>
          <div>TOP</div>
          
        </div>
      </div>
    </>
  );
};

export default SeoService;
