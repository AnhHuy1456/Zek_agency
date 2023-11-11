import React from "react";
import classNames from "classnames/bind";
import styles from "./BenefitSeo.module.scss";
import ImgUrl1 from "../../../../assets/images/icon-1.png";
import ImgUrl2 from "../../../../assets/images/icon-2.png";
import ImgUrl3 from "../../../../assets/images/icon-3.png";
import ImgUrl4 from "../../../../assets/images/icon-4.png";
import ImgUrl5 from "../../../../assets/images/icon-5.png";

const cx = classNames.bind(styles);

const BenefitSeo = () => {
  const list = [
    {
      id: 1,
      image: ImgUrl5,
      name: "Tiết kiệm chi phí",
      text: "Xu hướng mua sắm của người dùng dần chuyển dịch sang kênh online để đảm bảo an toàn giãn cách.",
    },
    {
      id: 2,
      image: ImgUrl4,
      name: "Tăng độ nhận diện thương hiệu cho doanh nghiệp",
      text: " Xu hướng mua sắm của người dùng dần chuyển dịch sang kênh online để đảm bảo an toàn giãn cách.",
    },
    {
      id: 3,
      image: ImgUrl2,
      name: "Cải thiện Traffic",
      text: "Xu hướng mua sắm của người dùng dần chuyển dịch sang kênh online để đảm bảo an toàn giãn cách.",
    },
    {
      id: 4,
      image: ImgUrl3,
      name: "Tăng chỉ số roi của web",
      text: "Xu hướng mua sắm của người dùng dần chuyển dịch sang kênh online để đảm bảo an toàn giãn cách.",
    },
    {
      id: 5,
      image: ImgUrl1,
      name: "An toàn và bền vững",
      text: "Xu hướng mua sắm của người dùng dần chuyển dịch sang kênh online để đảm bảo an toàn giãn cách.",
    },
    {
      id: 6,
      image: ImgUrl5,
      name: "Chiếm lĩnh thị phần của đối thủ",
      text: "Xu hướng mua sắm của người dùng dần chuyển dịch sang kênh online để đảm bảo an toàn giãn cách.",
    },
  ];

  const showList = list.map((el) => {
    return (
      <div key={el.id} className={cx("item")}>
        <div className={cx("icon")}>
          <img src={el.image} />
        </div>
        <h4 className={cx("name")}>{el.name}</h4>
        <div className={cx("text")}>{el.text}</div>
      </div>
    );
  });

  return (
    <>
      <div className={cx("benefit-seo")}>
        <div className={cx("container")}>
          <div className={cx("title-home")}>
            <h2 className={cx("title")}>
              LỢI ÍCH CỦA SEO TỔNG THỂ WEBSITE SO VỚI SEO TỪ KHÓA TRUYỀN THỐNG
            </h2>
            <div className={cx("divider")}></div>
          </div>

          <div className={cx("content-home")}>
            <div className={cx("row")}>
              <div className={cx("col-md-6")}>
                <div className={cx("img")}>
                  <img src="https://sosanhgiakhoahoc.com/images/posts/2021/8/18/khoa-hoc-seo-online-01.jpg" />
                </div>
              </div>
              <div className={cx("col-md-6")}>
                <div className={cx("list")}>{showList}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenefitSeo;
