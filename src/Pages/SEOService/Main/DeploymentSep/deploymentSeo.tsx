import React from "react";
import classNames from "classnames/bind";

import styles from "./Deployment.module.scss";
import Icon1Url from "../../../../assets/images/icon-1.png";
import Icon1Ur2 from "../../../../assets/images/icon-2.png";
import Icon1Ur3 from "../../../../assets/images/icon-3.png";
import Icon1Ur4 from "../../../../assets/images/icon-4.png";
import Icon1Ur5 from "../../../../assets/images/icon-5.png";

const cx = classNames.bind(styles);

const DeploymentSeo = () => {
  const Procedure = [
    {
      id: 1,
      image: Icon1Url,
      text: "TIẾP NHẬN THÔNG TIN VÀ TƯ VẤN SƠ BỘ",
    },
    {
      id: 2,
      image: Icon1Ur2,
      text: "ĐÁNH GIÁ MỨC ĐỘ CẠNH TRANH VÀ THỐNG NHẤT",
    },
    {
      id: 3,
      image: Icon1Ur3,
      text: "NGHIÊN CỨU CHUYÊN SÂU VỀ SẢN PHẨM",
    },
    {
      id: 4,
      image: Icon1Ur4,
      text: "LÊN KẾ HOẠCH TRIỂN KHAI CHI TIẾT",
    },
    {
      id: 5,
      image: Icon1Ur5,
      text: "KÝ HỢP ĐỒNG LÀM VIỆC",
    },
    {
      id: 6,
      image: Icon1Ur3,
      text: "TỐI ƯU WEBSITE (ONPAGE)",
    },
    {
      id: 7,
      image: Icon1Ur2,
      text: "XÂY DỰNG CONTENT PLAN",
    },
    {
      id: 8,
      image: Icon1Ur4,
      text: "TRIỂN KHAI SEO THEO KẾ HOẠCH",
    },
    {
      id: 9,
      image: Icon1Ur5,
      text: "GIÁM SÁT, TỐI ƯU VÀ ĐẢM BẢO KPI",
    },
    {
      id: 10,
      image: Icon1Ur3,
      text: "NGHIỆM THU VÀ BÀN GIAO DỰ ÁN",
    },
  ];

  const showProcedure = (Procedure).map((el) => {
    return (
      <li key={el.id} className={cx('item')}>
        <div className={cx("icon")}>
          <img src={el.image} />
          <div className={cx('number')}>{el.id}</div>
        </div>
        <div className={cx("text")}>{el.text}</div>
      </li>
    );
  });


  //! Render
  return (
    <>
      
      <div className={cx("deployment-ceo")}>
        <div className={cx("container")}>
          <div className={cx("title-home")}>
            <h2 className={cx("title")}>
              Quy trình triển khai dịch vụ SEO tổng thể website trọn gói
              <br />
              uy tín chuyên nghiệp
            </h2>
            <div className={cx("divider")}></div>
          </div>

          <div className={cx("content-home")}>
            <div className={cx("inner")}>
              <ul className={cx("list")}>
                {showProcedure}
                <li className={cx("line")}></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeploymentSeo;
