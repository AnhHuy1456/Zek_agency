import React from "react";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import Header from "./Header/header";
import Section from "./Section ";

const cx = classNames.bind(styles);

const Home = () => {


  return (
    <>


      <header className={cx("header")}>
        <Header />
      </header>
      <div className={cx('Huy')}><Section /></div>
    </>
  );
};

export default Home;
