import React from "react";
import classNames from "classnames/bind";

import styles from "./OrtherService.module.scss";
import Mockup from "../../../../assets/images/mockup-21.png"



const cx = classNames.bind(styles);

const OrtherService = () => {
  const listLeft = [
    {
      id: 1,
      titleLeft: "Chiến lược nội dung và tối ưu SEO",
    },
    {
      id: 2,
      titleLeft: "Nghiên cứu từ khóa và đối thủ",
    },
    {
      id: 3,
      titleLeft: "Xây dựng liên kết trong và ngoài Website",
    },
    {
      id: 4,
      titleLeft: "Kiểm toán SEO (Audit SEO)",
    },
  ];

  const shotListLeft = listLeft.map((el) => {
    return (
      <li key={el.id} className={cx("item-left")}>
        <div className={cx("number-left")}>{el.id}</div>
        <div className={cx("divider-left")}></div>
        <h4 className={cx("name-left")}>{el.titleLeft}</h4>
      </li>
    );
  });

  const listRight = [
    {
        id: 5,
        titleRight: "Nâng cấp và di dời website (Bảo toàn SEO)",
      },
      {
        id: 6,
        titleRight: "Xác minh Google Bussiness",
      },
      {
        id: 7,
        titleRight: "Chiến lược phát triển nội dung và tối ưu SEO",
      },
      {
        id: 8,
        titleRight: "Giám sát hiệu quả SEO qua hàng tháng",
      },
  ]
  const shotListRight = listRight.map((el) => {
    return (
      <li key={el.id} className={cx("item-right")}>
        <div className={cx("number-right")}>{el.id}</div>
        <div className={cx("divider-right")}></div>
        <h4 className={cx("name-right")}>{el.titleRight}</h4>
      </li>
    );
  });


  //! Render
  return (
    <>
      <div className={cx("orther-service")}>
        <div className={cx("container")}>
          <div className={cx("title-home")}>
            <h2 className={cx("title")}>Một số dịch vụ khác của Zek Agency</h2>
            <div className={cx("divider")}></div>
          </div>
          <div className={cx("content-home")}>
            <div className={cx("this-pc")}>
              <div className={cx("row-flex")}>
                <ul className={cx("list list-left")}>{shotListLeft}</ul>
                <div className={cx('img')}>
                  <img src={Mockup} />
                </div>
                <ul className={cx("list list-right")}>{shotListRight}</ul>
              </div>
            </div>
          </div>
  
          <div className={cx('link-center')}>
            <a href="">Nhận báo giá</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrtherService;
