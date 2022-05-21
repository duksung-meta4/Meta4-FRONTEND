import React from "react";
import styles from "../css/Drawing.module.css";

const Drawing = () => {
  return (
    <div>
      {/* 메뉴바 */}
      <div className={styles.semiMenu}>
        <div className={styles.logo}>Meta4Music</div>
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
        <div className={styles.drawingTools}></div>
        {/* 버튼 */}
        <button type="button">Start making!</button>
      </div>
    </div>
  );
};

export default Drawing;
