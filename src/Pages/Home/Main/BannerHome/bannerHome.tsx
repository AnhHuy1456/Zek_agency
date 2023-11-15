import React from "react";
import classNames from "classnames/bind";

import styles from "./BannerHome.module.scss";

const cx = classNames.bind(styles);

const BannerHome = () => {
  return (
    <div className={cx("banner-home")}>
      <div className={cx("container")}>
        <div className={cx("inner")}>
          <h2 className={cx("title")}>
            Giải pháp toàn diện cho sự phát triển doanh nghiệp
          </h2>
          <div className={cx("text")}>
            ZEK AGENCY là Đơn vị đồng hành cùng sự phát triển của doanh nghiệp -
            chuyên tư vấn và triển khai các chiến dịch Digital Marketing bao
            gồm: SEO, Google Ads(Search - Youtube - Shopping - GDN...). Với định
            vị Digital Performance Marketing Agency chúng tôi hiểu rất rõ bản
            thân phải làm gì để các doanh nghiệp đạt được hiệu quả cao nhất về
            "SỐ".
          </div>
          <a className={cx('button-home')}>
            Nhận tư vấn
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
