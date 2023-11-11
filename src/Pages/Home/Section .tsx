import  { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

const Section = () => {
  const showAlert = () => {
    alert("Bạn đã cuộn 100px!");
  };

  // Sử dụng useEffect để đăng ký sự kiện cuộn và gọi hàm showAlert khi cuộn đến 100px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        showAlert();
      }
      
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Hiển thị nút cuộn và một số nội dung
  return (
    <div>
      <p>
        Lorem i<br />
        psum d<br />
        olor <br />
        sit <br />
        amet, c<br />
        onsectetur <br />
        adipiscing <br />
        elit. S<br />
        ed <br />
        quis fermentum <br />
        lorem. <br />
        Sed <br />
        id le
        <br />o quis <br />
        nisi sag
        <br />
        ittis <br />
        aliquet. <br />
        Don
        <br />
        ec solli
        <br />
        citudin, au
        <br />
        gue vitae <br />
        malesu
        <br />
        ada tin
        <br />c<br />
        idunt, nu
        <br />
        nc nisl <br />
        sagittis
        <br />
        le
        <br />
        ctus, qu
        <br />
        is cons
        <br />
        equat m<br />
        agna leo s<br />
        it amet er
        <br />
        os. Mauris <br />
        auctor, nisl vitae tin
        <br />
        cidun
        <br />t consectet
        <br />
        ur, leo elit ultrices urna, quis <br />
        lacinia sapi
        <br />
        en nisl quis augue. Sed sit <br />
        amet nisl quis ar
        <br />
        cu tincidunt con
        <br />
        sequ
        <br />
        at. Sed
        <br /> quis magna
        <br /> in leo ulla
        <br />
        mcorper t<br />
        incidun
        <br />
        t. Se
        <br />d quis tin
        <br />
        cidu
        <br />
        nt lo
        <br />
        rem. Nulla facilisi. Morbi qu
        <br />
        is nisl <br />
        quis aug
        <br />
        ue ullam
        <br />
        corper ti
        <br />
        ncidunt. Sed quis tincidunt lorem. Nu
        <br />
        lla <br />
        faci
        <br />
        lisi. Morbi q<br />
        ui
        <br />s ni
        <br />s<br />l qu
        <br />
        is au
        <br />
        gue ulla
        <br />
        mcorp
        <br />
        er
        <br /> tincidu
        <br />
        nt.
      </p>
    </div>
  );
};

export default Section;
