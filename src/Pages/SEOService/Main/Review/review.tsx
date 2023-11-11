import React from "react";
import classNames from "classnames/bind";

import styles from "./Review.module.scss";
import lineTitle from "../../../../assets/images/line_title.png";
import Quote from "../../../../assets/images/quote.png";
import Jisoo from "../../../../assets/images/Jisoo.jpg";
import Jennie from "../../../../assets/images/Jennie.jpg";
import Lisa from "../../../../assets/images/Lisa.jpg";
import Rose from "../../../../assets/images/Rose.jpg";

const cx = classNames.bind(styles);

const Review = () => {
  return (
    <div className={cx("feedback")}>
      <div className={cx("container")}>
        <div className={cx("title-home")}>
          <h2 className={cx("title")}>Khách hàng nói gì về Zek Agency</h2>
          <img src={lineTitle} className={cx("line-title")} />
        </div>
        <div className={cx("content-home")}>
          <div className={cx("row-flex")}>
            <div className={cx("col-md-4")}>
              <div className={cx("inner")}>
                <h3 className={cx("titlesmall")}>
                  Hướng tới sự hài lòng của quý khách hàng
                </h3>
                <div className={cx("text")}>
                  Zek Agency tự hào vì đã nhận được sự tin tưởng của nhiều cá
                  nhân, tổ chức, được đóng góp 1 phần sức lực của mình để giúp
                  nhiều doanh nghiệp phát triển thịnh vượng hơn.
                </div>
              </div>
            </div>
            <div className={cx("col-md-8")}>
              <div className={cx("this-pc")}>
                <div className={cx("list")}>
                  <div className={cx("box")}>
                    <div className={cx("item-above-left")}>
                      <img src={Jisoo} className={cx("avt")} />

                      <img src={Quote} className={cx("icon")} />

                      <div className={cx("headtitle")}>
                        <div className={cx("name")}>Jisoo</div>

                        <div className={cx("sub")}>BlackPink</div>
                      </div>

                      <div className={cx("content")}>
                        Giao website cho team SEO của Zek Agency tôi hoàn toàn
                        yên tâm. Các bạn ấy rất sâu về chuyên môn, luôn đưa ra
                        giải pháp tối ưu nhất cho tôi.
                      </div>
                    </div>

                    <div className={cx("item-below-left")}>
                      <img src={Jennie} className={cx("avt")} />

                      <img src={Quote} className={cx("icon")} />

                      <div className={cx("headtitle")}>
                        <div className={cx("name")}>Jennie</div>

                        <div className={cx("sub")}>BlackPink</div>
                      </div>

                      <div className={cx("content")}>
                        Từ ngày làm SEO tổng thể của Zek Agency, bên tôi đã tiết
                        kiệm được 30% chi phí cho Marketing.
                      </div>
                    </div>
                  </div>
                  <div className={cx("box")}>
                    <div className={cx("item-above-right")}>
                      <img src={Rose} className={cx("avt")} />
                      <img src={Quote} className={cx("icon")} />
                      <div className={cx("headtitle")}>
                        <div className={cx("name")}>Rose</div>
                        <div className={cx("sub")}>BlackPink</div>
                      </div>
                      <div className={cx("content")}>
                        Giao website cho team SEO của Zek Agency tôi hoàn toàn
                        yên tâm. Các bạn ấy rất sâu về chuyên môn, luôn đưa ra
                        giải pháp tối ưu nhất cho tôi.
                      </div>
                    </div>

                    <div className={cx("item-below-right")}>
                      <img src={Quote} className={cx("icon")} />
                      <img src={Lisa} className={cx("avt")} />
                      <div className={cx("headtitle")}>
                        <div className={cx("name")}>Lisa</div>
                        <div className={cx("sub")}>BlackPink</div>
                      </div>
                      <div className={cx("content")}>
                        Từ ngày làm SEO tổng thể của Zek Agency, bên tôi đã tiết
                        kiệm được 30% chi phí cho Marketing.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
