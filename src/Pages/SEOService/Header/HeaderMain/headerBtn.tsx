import React from "react";
import classNames from "classnames/bind";
import styles from "./HeaderBtn.module.scss";

import SeoService from "../../seoService";

const cx = classNames.bind(styles);

const HeaderBtn = () => {
  return (
    <div className={cx("header-btn")}>
      <div className={cx("header-main")}>
        <div className={cx("header-nav")}>
          <div className={cx("time-work")}>
            <img src="https://zek.vn/core/viewszek/bf4826a616/images/Time.png" />
            Mon - Sat: 8:00 - 17:30
          </div>
          <a href="" className={cx("link")}>
            LIÊN HỆ TƯ VẤN
          </a>
        </div>
        <div className={cx("header-menu")}>
          <ul className={cx("menu")}>
            <li className={cx("menu-item")}>
              <a href="" className={cx('menu-hover-nolist')}> KHO GIAO DIỆN </a>
            </li>
            <li className={cx("menu-item")}>
              <div className={cx('menu-hover')}> DỊCH VỤ </div>
               <ul className={cx("sub-menu")}>
                <li className={cx('list-menu')}>
                  <a href="/seoServices" className={cx('list-menu-hover')}>Dịch vụ SEO</a>
                </li>
                <li className={cx('list-menu')}>
                  <a href="#" className={cx('list-menu-hover')}>Dịch vụ Thiết kế website</a>
                </li>
              </ul>
            </li>
            <li className={cx("menu-item")}>
              <div className={cx('menu-hover')}> BÁO GIÁ </div>
              <ul className={cx("sub-menu")}>
                <li className={cx('list-menu')}>
                  <a href="#" className={cx('list-menu-hover')}>Báo giá SEO</a>
                </li>
                <li className={cx('list-menu')}>
                  <a href="#" className={cx('list-menu-hover')}>Báo giá thiết kế website</a>
                </li>
                <li className={cx('list-menu')}>
                  <a href="#" className={cx('list-menu-hover')}>Báo giá Hosting</a>
                </li>
                <li className={cx('list-menu')}>
                  <a href="#" className={cx('list-menu-hover')}>Báo giá tên miền</a>
                </li>
                <li className={cx('list-menu')}>
                  <a href="#" className={cx('list-menu-hover')}>Báo giá email tên miền</a>
                </li>
                <li className={cx('list-menu')}>
                  <a href="#" className={cx('list-menu-hover')}>Báo giá google ADS</a>
                </li>
                <li className={cx('list-menu')}>
                  <a href="#" className={cx('list-menu-hover')}>Báo giá dịch vụ khác</a>
                </li>
              </ul>
            </li>
            <li className={cx("menu-item")}>
              <div className={cx('menu-hover')}> KHÁCH HÀNG </div>
              <ul className={cx("sub-menu")}>
                <li className={cx('list-menu')}>
                  <a href="#" className={cx('list-menu-hover')}>Cas study</a>
                </li>
                <li className={cx('list-menu')}>
                  <a href="#" className={cx('list-menu-hover')}>Feedback</a>
                </li>
              </ul>
            </li>
            <li className={cx("menu-item")}>
              <div className={cx('menu-hover')}> CHIA SẺ </div>
              <ul className={cx("sub-menu")}>
                <li className={cx('list-menu')}>
                  <a href="#" className={cx('list-menu-hover')}>SEO</a>
                </li>
                <li className={cx('list-menu')}> 
                  <a href="#" className={cx('list-menu-hover')}>Facebook</a>
                </li>
                <li className={cx('list-menu')}>
                  <a href="#" className={cx('list-menu-hover')}>Google ADS</a>
                </li>
              </ul>
            </li>
            <li className={cx("menu-item")}>
              <a href="" className={cx('menu-hover-nolist')}> VỀ CHÚNG TÔI </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderBtn;
