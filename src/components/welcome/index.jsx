import style from "./index.module.scss";
import { useState, useEffect } from "react";

const Welcome = () => {
  const [w, setW] = useState(1);

  const handleResize = () => {
    setW(document.getElementById("be").getBoundingClientRect().height);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
    handleResize();
  });

  return (
    <div className={style.background}>
      <div className="container">asd</div>
      <hr className={style.hr}></hr>
      <div className={style.test}></div>
      <div className={style.r}>
        <div id="be" className={style.a}>
          asd
        </div>
        <div
          className={style.testB}
          style={{ borderTopWidth: w, borderLeftWidth: w }}
        >
          asd
        </div>
      </div>
    </div>
  );
};

export default Welcome;
