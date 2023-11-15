import React from "react";
import classNames from "classnames/bind";

import styles from "./ServiceHome.module.scss";
import Mockup from "../../../../assets/images/mockup-2.png";
import SEO from "../../../../assets/images/Group-149.png";
import ADS from "../../../../assets/images/Group-159.png";
import Website from "../../../../assets/images/Group-169.png";
import Overall from "../../../../assets/images/Group-179.png";

const cx = classNames.bind(styles);

const service = [
  {
    id: 1,
    img: `${SEO}`,
    title: "Dịch vụ SEO",
    content1: "Tối giản chi phí",
    content2: "Tăng trưởng bền vững",
    content3: "Phủ sóng thương hiệu",
    content4: "Traffic tối đa",
    url: "/seoServices",
  },
  {
    id: 2,
    img: `${ADS}`,
    title: "Dịch vụ ADS",
    content1: "Doanh thu đột biến",
    content2: "Tăng chất lượng lead",
    content3: "Tối ưu chi phí",
    content4: "Traffic tối ưu",
    url: "/",
  },
  {
    id: 3,
    img: `${Website}`,
    title: "Dịch vụ Website",
    content1: "Thiết kế chuẩn SEO",
    content2: "Giao diện thời thượng",
    content3: "Công nghệ update liên tục",
    content4: "Support đảm bảo 20/7",
    url: "/",
  },
  {
    id: 4,
    img: `${Overall}`,
    title: "Dịch vụ tổng thể",
    content1: "Chiến lược bài bản",
    content2: "Kế hoạch chi tiết",
    content3: "Timeline rõ ràng",
    content4: "Cam kết KPI",
    url: "/",
  },
];

const ServiceHome = () => {
  const showService = service.map((el) => {
    return (
      <a key={el.id} href={el.url} className={cx("item")}>
        <img src={el.img} className={cx("icon")} />
        <h4 className={cx("name")}>{el.title}</h4>
        <div className={cx("content")}>
          <ul>
            <li>{el.content1}</li>
            <li>{el.content2}</li>
            <li>{el.content3}</li>
            <li>{el.content4}</li>
          </ul>
        </div>
      </a>
    );
  });

  const Image = () => {
    return (
      <div className={cx("col-md-6")}>
        <div className={cx("img")}>
          <img src={Mockup} />
        </div>
      </div>
    );
  };

  //! Render
  return (
    <div className={cx("service-home")}>
      <div className={cx("container")}>
        <div className={cx("title-home")}>
          <h2 className={cx("title")} onClick={() => {
            
          }}>Dịch vụ cung cấp của chúng tôi</h2>
          <div className={cx("divider")}></div>
        </div>
        <div className={cx("content-home")}>
          <div className={cx("row-flex")}>
            <div className={cx("col-md-6")}>
              <div className={cx("img")}>
                <img src={Mockup} />
              </div>
            </div>
            <div className={cx("col-md-6")}>
              <div className={cx("columns-2")}>
              {showService}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHome;
