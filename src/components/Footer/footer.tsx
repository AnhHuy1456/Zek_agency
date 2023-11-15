import React from "react";
import classNames from "classnames/bind";

import styles from "./Footer.module.scss";
import Logo from "../../assets/images/logo.png";
import Call from "../../assets/images/icon_call.png";
import Mail from "../../assets/images/icon_mail.png";
import Local from "../../assets/images/icon_local.png";
import DMCA from "../../assets/images/image21.png"


const cx = classNames.bind(styles);

const Footer = () => {
  const aboutUs = [
    {
      id: 1,
      text: "Giới thiệu",
    },
    {
      id: 2,
      text: "Tuyển dụng",
    },
  ];

  const serviceZek = [
    {
      id: 1,
      text: "Dịch vụ SEO",
    },
    {
      id: 2,
      text: "Dịch vụ ADS",
    },
    {
      id: 3,
      text: "Dịch vụ Website",
    },
    {
      id: 4,
      text: "Marketing toàn diện",
    },
  ];

  const Knowledge = [
    {
      id: 1,
      text: "Kiến thức về SEO",
    },
    {
      id: 2,
      text: "Bộ tài liệu A-Z SEO",
    },
    {
      id: 3,
      text: "Cập nhật chính sách Google Ads",
    },
    {
      id: 4,
      text: "Liên kết với Google Partner",
    },
    {
      id: 5,
      text: "Nhóm đào tạo",
    },
    {
      id: 6,
      text: "Group kiến thức cùng ZEK",
    },
  ];

  return (
    <div className={cx("footer-main")}>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div id="custom-html-2" className={cx("col-md-6")}>
            <div className={cx("textwidget")}>
              <div className={cx("info-footer")}>
                <img src={Logo} className={cx("logo")} />
                <div className={cx("title")}>
                  Công ty TNHH truyền thông ZEK Việt Nam
                </div>
                <div className={cx("info")}>
                  <div className={cx("value")}>
                    <div className={cx("icon")}>
                      <img src={Call} />
                    </div>
                    <div className={cx("text")}>
                      <strong>Sđt: </strong>
                      0123456789
                    </div>
                  </div>
                  <div className={cx("value")}>
                    <div className={cx("icon")}>
                      <img src={Mail} />
                    </div>
                    <div className={cx("text")}>
                      <strong>Email: </strong>
                      NguyenVanA@gmail.com
                    </div>
                  </div>
                  <div className={cx("value")}>
                    <div className={cx("icon")}>
                      <img src={Local} />
                    </div>
                    <div className={cx("text")}>
                      <strong>Trụ sở: </strong>
                      Hà Nội
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="custom-html-3" className={cx("col-md-3")}>
            <div className={cx("footer-title")}>
              <span> Về chúng tôi</span>
              <div className={cx("divider")}></div>
            </div>

            <div className={cx("textwidget")}>
              <ul className={cx("link-footer")}>
                <li> Giới thiệu </li>
                <li> Tuyển dụng </li>
              </ul>
              <div className={cx("footer-title")}>
                <span> Dịch vụ của ZEK</span>
                <div className={cx("divider")}></div>
              </div>
              <ul className={cx("link-footer")}>
                <li> Dịch vụ SEO </li>
                <li> Dịch vụ ADS </li>
                <li> Dịch vụ Website </li>
                <li> Marketing toàn diện </li>
              </ul>
            </div>
          </div>
          <div id="custom-html-4" className={cx("col-md-3")}>
            <div className={cx("footer-title")}>
              <span> Kiến thức cung cấp</span>
              <div className={cx("divider")}></div>
            </div>
            <ul className={cx("link-footer")}>
              <li> Kiến thức về SEO </li>
              <li> Bộ tài liệu A-Z SEO </li>
              <li> Cập nhật chính sách Google Ads </li>
              <li> Liên kết với Google Partner </li>
              <li> Nhóm đào tạo </li>
              <li> Group kiến thức cùng ZEK </li>
            </ul>
            <div className={cx('img-footer')}>
                <img src={DMCA} /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
