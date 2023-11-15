import React from "react";
import classNames from "classnames/bind";

import styles from "./BannerPage.module.scss";

const cx = classNames.bind(styles);

const BannerPage = () => {
  return (
    <div className={cx("banner-page")}>
      <div className={cx("inner")}>
        <div className={cx("container")}>
          <div className={cx("box-title")}>
            <h2 className={cx("title-page")}>
              Mẫu website chuyên nghiệp - nhanh chóng
            </h2>
            <div className={cx("text")}>
              ZEK AGENCY sở hữu hơn 500+ mẫu giao diện về tất cả các lĩnh vực và
              ngành hàng khác nhau, đáp ứng mọi nhu cầu của khách hàng với từng
              phân khúc giá. Cập nhật những mẫu thiết kế mới chuẩn xu hướng
            </div>
          </div>
          <div className={cx("carousel")}></div>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
