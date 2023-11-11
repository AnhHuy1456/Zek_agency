import React from "react";
import styles from "./ServiceCeo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ServiceCeo = () => {
  const list = [
    {
      id: 1,
      name: "Dịch vụ SEO tổng thể là gì",
      text: "Dịch vụ SEO tổng thể (SEO Website, SEO Google…) là phương pháp SEO tất cả các từ khóa khách hàng đã, đang và sẽ tìm kiếm. Ưu điểm của dịch vụ SEO tổng thể là an toàn với thuật toán của Google, nâng tổng thể sức mạnh toàn website.",
    },
    {
      id: 2,
      name: "Doanh nghiệp nào nên lựa chọn SEO tổng thể ?",
      text: " Thông tin về sản phẩm/ dịch vụ mọi doanh nghiệp đều cần xuất hiện trên trang đầu nhất Google hoặc càng cao càng tốt. Zek Agency sẽ giúp bạn làm điều đó. Dịch vụ SEO của ZEK AGENCY an toàn, hiệu quả, bền vững. website.",
    },
  ];

  const showList = (list).map((el) => {
    return (
      <div key={el.id} className={cx("item")}>
        <div className={cx("number")}>{el.id}</div>
        <div className={cx("divider")}></div>
        <h4 className={cx("name")}>{el.name}</h4>
        <div className={cx("text")}>
          {el.text}
        </div>
      </div>
    );
  });

  return (
    <>
      <div className={cx("service-ceo")}>
        <div className={cx("container")}>
          <div className={cx("title-home")}>
            <h2 className={cx("title")}>
              DỊCH VỤ SEO TỔNG THỂ WEBSITE TRỌN GÓI CHUYÊN NGHIỆP
            </h2>
            <div className={cx("divider")}></div>
          </div>
          <div className={cx("content-home")}>
            <div className={cx("row-flex")}>
              <div className={cx("col-md-6")}>
                <div className={cx("img")}>
                  <img src="https://www.tranlegroup.com/Uploads/Image/0-dich-vu-thiet-ke-website/5-loi-ich-chua-biet-khi-thue-dich-vu-seo-2.jpg" />
                </div>
              </div>
              <div className={cx("col-md-6")}>
                <div className={cx("list")}>
                  {showList}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCeo;
