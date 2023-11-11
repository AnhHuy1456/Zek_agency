import React from "react";
import styles from "./QuoteSeo.module.scss";
import classNames from "classnames/bind";

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
      image:
        "data:image/png;base64,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",
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
      image:
        "data:image/png;base64,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",
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
      image:
        "data:image/png;base64,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",
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
