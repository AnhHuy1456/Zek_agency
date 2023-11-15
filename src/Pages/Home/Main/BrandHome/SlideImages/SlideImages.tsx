import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classNames from "classnames/bind";

import styles from "./SlideImages.module.scss";
import congan from "../../../../../assets/images/congan.png";
import everon from "../../../../../assets/images/everon.png";
import khoruou from "../../../../../assets/images/khoruou.png";
import lavatino from "../../../../../assets/images/lavatino.png";
import zeka from "../../../../../assets/images/zeka.png";
import zito from "../../../../../assets/images/zito.png";
import onplaza from "../../../../../assets/images/onplaza.png";
import fom from "../../../../../assets/images/fom.png";
import media from "../../../../../assets/images/media.png";

const cx = classNames.bind(styles);

const SlideImg = [
  {
    id: 1,
    url: `${congan}`,
    Introduce:
      "Công Ty Cổ Phần Fordeer Commerce là một trong những công ty xuất bản phần mềm lớn nhất ở Việt Nam. Được thành lập vào năm 2023, Công Ty Cổ Phần Fordeer Commerce đã luôn đặt chất lượng sản phẩm lên hàng đầu, với mục tiêu mang lại sự an toàn, tiện lợi và thân thiện với người sử dụng.",
  },
  {
    id: 2,
    url: `${everon}`,
    Introduce:
      "Công Ty Cổ Phần Fordeer Commerce là một trong những công ty xuất bản phần mềm lớn nhất ở Việt Nam. Được thành lập vào năm 2023, Công Ty Cổ Phần Fordeer Commerce đã luôn đặt chất lượng sản phẩm lên hàng đầu, với mục tiêu mang lại sự an toàn, tiện lợi và thân thiện với người sử dụng.",
  },
  {
    id: 3,
    url: `${khoruou}`,
    Introduce:
      "Công Ty Cổ Phần Fordeer Commerce là một trong những công ty xuất bản phần mềm lớn nhất ở Việt Nam. Được thành lập vào năm 2023, Công Ty Cổ Phần Fordeer Commerce đã luôn đặt chất lượng sản phẩm lên hàng đầu, với mục tiêu mang lại sự an toàn, tiện lợi và thân thiện với người sử dụng.",
  },
  {
    id: 4,
    url: `${lavatino}`,
    Introduce:
      "Công Ty Cổ Phần Fordeer Commerce là một trong những công ty xuất bản phần mềm lớn nhất ở Việt Nam. Được thành lập vào năm 2023, Công Ty Cổ Phần Fordeer Commerce đã luôn đặt chất lượng sản phẩm lên hàng đầu, với mục tiêu mang lại sự an toàn, tiện lợi và thân thiện với người sử dụng.",
  },
  {
    id: 5,
    url: `${zeka}`,
    Introduce:
      "Công Ty Cổ Phần Fordeer Commerce là một trong những công ty xuất bản phần mềm lớn nhất ở Việt Nam. Được thành lập vào năm 2023, Công Ty Cổ Phần Fordeer Commerce đã luôn đặt chất lượng sản phẩm lên hàng đầu, với mục tiêu mang lại sự an toàn, tiện lợi và thân thiện với người sử dụng.",
  },
  {
    id: 6,
    url: `${zito}`,
    Introduce:
      "Công Ty Cổ Phần Fordeer Commerce là một trong những công ty xuất bản phần mềm lớn nhất ở Việt Nam. Được thành lập vào năm 2023, Công Ty Cổ Phần Fordeer Commerce đã luôn đặt chất lượng sản phẩm lên hàng đầu, với mục tiêu mang lại sự an toàn, tiện lợi và thân thiện với người sử dụng.",
  },
  {
    id: 7,
    url: `${onplaza}`,
    Introduce:
      "Công Ty Cổ Phần Fordeer Commerce là một trong những công ty xuất bản phần mềm lớn nhất ở Việt Nam. Được thành lập vào năm 2023, Công Ty Cổ Phần Fordeer Commerce đã luôn đặt chất lượng sản phẩm lên hàng đầu, với mục tiêu mang lại sự an toàn, tiện lợi và thân thiện với người sử dụng.",
  },
  {
    id: 8,
    url: `${fom}`,
    Introduce:
      "Công Ty Cổ Phần Fordeer Commerce là một trong những công ty xuất bản phần mềm lớn nhất ở Việt Nam. Được thành lập vào năm 2023, Công Ty Cổ Phần Fordeer Commerce đã luôn đặt chất lượng sản phẩm lên hàng đầu, với mục tiêu mang lại sự an toàn, tiện lợi và thân thiện với người sử dụng.",
  },
  {
    id: 9,
    url: `${media}`,
    Introduce:
      "Công Ty Cổ Phần Fordeer Commerce là một trong những công ty xuất bản phần mềm lớn nhất ở Việt Nam. Được thành lập vào năm 2023, Công Ty Cổ Phần Fordeer Commerce đã luôn đặt chất lượng sản phẩm lên hàng đầu, với mục tiêu mang lại sự an toàn, tiện lợi và thân thiện với người sử dụng.",
  },
];

const SlideImages = () => {
  return (
    <div className={cx("slide-container")}>
      <Slide>
        {SlideImg.map((Img) => {
          return (
            <>
              <div key={Img.id} className={cx("slide-img")}>
                <img src={Img.url} className={cx("image-slide")} />
                <text className={cx("text-slide")}>{Img.Introduce}</text>
              </div>
            </>
          );
        })}
      </Slide>
    </div>
  );
};

export default SlideImages;
