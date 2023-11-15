import React from "react";
import classNames from "classnames/bind";

import styles from "./Home.module.scss";
import Header from "../../components/Header/header";
import Main from "./Main/Main";
import Footer from "../../components/Footer/footer";

const cx = classNames.bind(styles);

const Home = () => {


  return (
    <>


      <header className={cx("header")}>
        <Header />
      </header>
      <main className={cx("main")}>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Home;
