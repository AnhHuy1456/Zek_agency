import React from 'react'
import classNames from "classnames/bind";
import styles from './App.module.scss'
import SeoService from './Pages/SEOService/seoService';
import Home from './Pages/Home/home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './Router/Router';


const cx = classNames.bind(styles);

const App = () => {
  return (
    <>
      <Router>
      <div className={cx('App')}>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={
                <Page />
            }
            />;
          })}
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App