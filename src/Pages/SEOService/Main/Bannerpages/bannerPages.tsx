import React from "react";
import styles from "./Bannerpage.module.scss";
import classNames from "classnames/bind";
import { PacmanLoader } from "react-spinners";

const cx = classNames.bind(styles);

const BannerPages = () => {
  return (
    <div>
      <div className={cx("banner-pages")}>
        <div className={cx("inner")}>
          <div className={cx("containers")}>
            <div className={cx("row-flex")}>
              <div className={cx("col-md-6")}>
                <h1 className={cx("title_pages")}>
                  Báo giá dịch vụ seo tổng thể website trọn gói uy tín chuyên
                  nghiệp
                </h1>
                <div className={cx("text")}>
                  <a href="https://zek.vn/">ZEK AGENCY </a>
                  là Đơn vị hỗ trợ và phát triển doanh nghiệp - chuyên tư vấn và
                  triển khai SEO, Google Ads (Search - Youtube - Shopping -
                  GDN...) và các chiến dịch Digital Marketing tổng thể.
                </div>
                <a
                  href=""
                  // data-toggle="modal"
                  // data-target="#popup_baogia"
                  // datatitle="BÁO GIÁ DỊCH VỤ SEO TỔNG THỂ"
                  // class="clicktitle button_home"
                  className={cx("link")}
                >
                  Nhận tư vấn
                </a>
              </div>
              <div className={cx("col-md-6")}>
                <div className={cx("img")}>
                  <img src="https://zek.vn/storagezek/2021/11/tool-card-2-1.png" />
                </div>
                <div>
                  <PacmanLoader color="#ffccff" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPages;
