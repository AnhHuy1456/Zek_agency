import React from "react";
import classNames from "classnames/bind";

import styles from "./WhyHome.module.scss";
import Subtract from "../../../../assets/images/Subtract.png";
import Img from '../../../../assets/images/Group-272.png'

const cx = classNames.bind(styles);

const listWhy = [
  {
    id: 1,
    url: Subtract,
    text: "Đội ngũ nhân sự có giàu kinh nghiệm và chuyên môn cao",
  },
  {
    id: 2,
    url: Subtract,
    text: "Mọi dịch vụ Zek Agency triển khai bài bản theo quy trình",
  },
  {
    id: 3,
    url: Subtract,
    text: 'Zek Agency "Support 20/7" giải quyết kịp thời mọi vấn đề',
  },
  {
    id: 4,
    url: Subtract,
    text: "Dịch vụ chạy quảng cáo - Cam kết ra chuyển đổi",
  },
  {
    id: 5,
    url: Subtract,
    text: "Dịch vụ SEO tổng thể của Zek Agency - Cam kết Lead ngành",
  },
  {
    id: 6,
    url: Subtract,
    text: "Thiết kế Website Chuyên nghiệp với kinh nghiệm +500 dự án",
  },
];

const showListWhy = listWhy.map((el) => {
  return (
    <div key={el.id} className={cx("list")}>
      <div className={cx("item")}>
        <img src={el.url} className={cx("icon")} />
        <h4 className={cx("capt")}>{el.text}</h4>
        <div className={cx('text')}></div>
      </div>
    </div>
  );
});

const WhyHome = () => {
  return (
    <div className={cx("why-home")}>
      <div className={cx("container")}>
        <div className={cx("title-home")}>
          <h2 className={cx("title")}>Lý do nên lựa chọn Zek Agency</h2>
          <div className={cx("divider")}></div>
        </div>
        <div className={cx("content-home")}>
          <div className={cx("row")}>
            <div className={cx("col-md-6")}>
              <div className={cx("inner")}>
                <div className={cx("text-sub")}>
                  Zek Agency tự hào vì đã nhận được sự tin tưởng của rất nhiều
                  cá nhân, tổ chức, được đóng góp 1 phần sức lực của mình để
                  giúp nhiều doanh nghiệp phát triển thịnh vượng hơn.
                </div>
                {showListWhy}
              </div>
            </div>
            <div className={cx("col-md-6")}>
                <div className={cx('img')}>
                    <img src={Img} />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHome;
