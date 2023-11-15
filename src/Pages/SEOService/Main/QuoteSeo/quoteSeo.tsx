import React from "react";
import styles from "./QuoteSeo.module.scss";
import classNames from "classnames/bind";

import Subtract from "../../../../assets/images/Subtract.png";

const cx = classNames.bind(styles);

const QuoteSeo = () => {
  const box = [
    {
      id: 1,
      name: "Gói cơ bản",
      captPrice: "Mức giá tối thiểu",
      price: 200,
      unit: "triệu",
      time: "/ 8 - 10 tháng",
      title: "Bao gồm:",
      text1: "Số từ khóa <200 từ khóa",
      text2: "Thời gian SEO: 8 - 10 tháng",
      text3: "Cam kết TOP",
      text4: "Cam kết Organic Traffic",
      text5: "Kế hoạch hàng tháng và báo cáo rõ ràng",
      text6: "Đảm bảo quyền lợi thông qua chính sách bảo hành, hoàn phí",
      image: `${Subtract}`,
    },
    {
      id: 2,
      name: "Gói vip",
      captPrice: "Mức giá tối thiểu",
      price: 500,
      unit: "triệu",
      time: "/ 10 - 12 tháng",
      title: "Bao gồm:",
      text1: "Số từ khóa <500 từ khóa",
      text2: "Thời gian SEO: 10 - 12 tháng",
      text3: "Cam kết TOP",
      text4: "Cam kết Organic Traffic",
      text5: "Kế hoạch hàng tháng và báo cáo rõ ràng",
      text6: "Đảm bảo quyền lợi thông qua chính sách bảo hành, hoàn phí",
      image: `${Subtract}`,
    },
    {
      id: 3,
      name: "Gói premium",
      captPrice: "Mức giá tối thiểu",
      price: "liên hệ",
      unit: "",
      time: "",
      title: "Bao gồm:",
      text1: "Số từ khóa <1000 từ khóa",
      text2: "Thời gian SEO: vĩnh viễn",
      text3: "Cam kết TOP",
      text4: "Cam kết Organic Traffic",
      text5: "Kế hoạch hàng tháng và báo cáo rõ ràng",
      text6: "Đảm bảo quyền lợi thông qua chính sách bảo hành, hoàn phí",
      image: `${Subtract}`,
    },
  ];

  const showBox = box.map((el) => {
    return (
      <div key={el.id} className={cx("item")}>
        <div className={cx("box")}>
          <div className={cx("head-box")}>
            <h4 className={cx("name")}>{el.name}</h4>
            <div className={cx("divider")}></div>
            <div className={cx("capt-price")}>{el.captPrice}</div>
            <div className={cx("box-price")}>
              <div className={cx("price")}>{el.price}</div>
              <div className={cx("sub")}>
                <div className={cx("unit")}>{el.unit}</div>
                <div className={cx("time")}>{el.time}</div>
              </div>
            </div>
            <a href="" className={cx("click-title")}>
              <span className={cx("line")}>
                <span>Nhận báo giá</span>
              </span>
            </a>
          </div>
          <div key={el.id} className={cx("content-box")}>
            <div className={cx("capt")}>{el.title}</div>
            <div className={cx("content")}>
              <ul>
                <li>
                  <img src={el.image} />
                  {el.text1}
                </li>
                <li>
                  <img src={el.image} />
                  {el.text2}
                </li>
                <li>
                  <img src={el.image} />
                  {el.text3}
                </li>
                <li>
                  <img src={el.image} />
                  {el.text4}
                </li>
                <li>
                  <img src={el.image} />
                  {el.text5}
                </li>
                <li>
                  <img src={el.image} />
                  {el.text6}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  });

  //! render

  return (
    <>
      <div className={cx("quote-seo")}>
        <div className={cx("container")}>
          <div className={cx("title-home")}>
            <h2 className={cx("title")}>
              Báo giá dịch vụ SEO tổng thể website trọn gói uy tín chuyên nghiệp
            </h2>
            <div className={cx("divider")}></div>
          </div>

          <div className={cx("content-home")}>
            <div className={cx("list")}>{showBox}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteSeo;
