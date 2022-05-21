import React from "react";
import styles from "../css/Drawing.module.css";
import eraser from "../img/eraser.png";
import fill from "../img/fill.png";
import { useNavigate } from "react-router-dom";

const Drawing = () => {
  const navigate = useNavigate();
  const goHomepage = () => {
    navigate("/");
  };
  return (
    <div>
      {/* 메뉴바 */}
      <div className={styles.semiMenu}>
        <div className={styles.logo} onClick={goHomepage}>
          Meta4Music
        </div>
      </div>

      {/* content영역 */}
      <div className={styles.drawingBody}>
        <div>
          <p>🎨 자유롭게 그림을 그려주세요!</p>
        </div>
        {/* 그림판 */}
        <canvas
          className={styles.drawingBoard}
          width="100"
          height="50"
        ></canvas>
        {/* 그림툴 */}
        <div className={styles.drawingTools}>
          <div className={styles.chooseColor}>
            <button
              type="button"
              className={styles.colorbutton}
              style={{ backgroundColor: "#D8313A" }}
            ></button>
            <button
              type="button"
              className={styles.colorbutton}
              style={{ backgroundColor: "#FF7F49" }}
            ></button>
            <button
              type="button"
              className={styles.colorbutton}
              style={{ backgroundColor: "#FFC000" }}
            ></button>
            <button
              type="button"
              className={styles.colorbutton}
              style={{ backgroundColor: "#77A56B" }}
            ></button>
            <button
              type="button"
              className={styles.colorbutton}
              style={{ backgroundColor: "#6ED5D0" }}
            ></button>
            <button
              type="button"
              className={styles.colorbutton}
              style={{ backgroundColor: "#47729A" }}
            ></button>
            <button
              type="button"
              className={styles.colorbutton}
              style={{ backgroundColor: "#7D64AD" }}
            ></button>
            <button
              type="button"
              className={styles.colorbutton}
              style={{ backgroundColor: "#272727" }}
            ></button>
          </div>
          {/* 구분선 */}
          <div className={styles.Line}></div>
          {/* 지우개 */}
          <div style={{ cursor: "pointer" }}>
            <img src={eraser} alt="지우개 그림" />
          </div>
          {/* 구분선 */}
          <div className={styles.Line}></div>
          {/* 채우기 */}
          <div style={{ cursor: "pointer" }}>
            <img src={fill} alt="채우기 그림" />
          </div>
          {/* 구분선 */}
          <div className={styles.Line}></div>
          {/* 굵기 조절 바*/}
          <div>
            <input type="range" />
          </div>
        </div>
        {/* 버튼 */}
        <button type="button" className={styles.startButton}>
          Start making!
        </button>
      </div>
    </div>
  );
};

export default Drawing;
