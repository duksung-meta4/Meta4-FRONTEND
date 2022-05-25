import React, { useEffect, useRef, useState } from "react";
import styles from "../css/Drawing.module.css";
import eraser from "../img/eraser.png";
import fill from "../img/fill.png";
import { useNavigate } from "react-router-dom";

const Drawing = () => {
  const canvasRef = useRef(null); //useRef사용
  // const contextRef = useRef(null); //캔버스의 드로잉 context참조

  const [ctx, setCtx] = useState(); //캔버스의 드로잉 context
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 256;
    canvas.height = 256;

    const context = canvas.getContext("2d");
    context.strokeStyle = "#272727";
    context.lineWidth = 2.5;
    setCtx(context);
  }, []);

  //console.log("ctx :", ctx);

  const startPainting = () => {
    setIsDrawing(true);
  };

  const stopPainting = () => {
    setIsDrawing(false);
  };

  const onMouseMove = ({ nativeEvent }) => {
    //console.log(nativeEvent);
    const { offsetX, offsetY } = nativeEvent;

    const x = offsetX;
    const y = offsetY;
    //console.log(x, y);

    if (!isDrawing) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  };

  //선 색깔 바꾸는 함수
  const changePenColor = (e) => {
    // console.log(e.target.style.backgroundColor);
    const color = e.target.style.backgroundColor;
    ctx.strokeStyle = color;
  };

  const navigate = useNavigate();
  const goHomepage = () => {
    navigate("/");
  };
  const goShowpage=() =>{
    navigate("/showing");
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
          ref={canvasRef}
          className={styles.drawingBoard}
          onMouseMove={onMouseMove}
          onMouseDown={startPainting}
          onMouseUp={stopPainting}
          onMouseLeave={stopPainting}
        ></canvas>
        {/* 그림툴 */}
        <div className={styles.drawingTools}>
          <div className={styles.chooseColor}>
            <button
              type="button"
              className={styles.colorbutton}
              style={{ backgroundColor: "#D8313A" }}
              onClick={changePenColor}
            ></button>
            <button
              type="button"
              className={styles.colorbutton}
              style={{ backgroundColor: "#FF7F49" }}
              onClick={changePenColor}
            ></button>
            <button
              type="button"
              className={styles.colorbutton}
              style={{ backgroundColor: "#FFC000" }}
              onClick={changePenColor}
            ></button>
            <button
              type="button"
              className={styles.colorbutton}
              style={{ backgroundColor: "#77A56B" }}
              onClick={changePenColor}
            ></button>
            <button
              type="button"
              className={styles.colorbutton}
              style={{ backgroundColor: "#6ED5D0" }}
              onClick={changePenColor}
            ></button>
            <button
              type="button"
              className={styles.colorbutton}
              style={{ backgroundColor: "#47729A" }}
              onClick={changePenColor}
            ></button>
            <button
              type="button"
              className={styles.colorbutton}
              style={{ backgroundColor: "#7D64AD" }}
              onClick={changePenColor}
            ></button>
            <button
              type="button"
              className={styles.colorbutton}
              style={{ backgroundColor: "#272727" }}
              onClick={changePenColor}
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
        <button type="button" className={styles.startButton} onClick={goShowpage}>
          Start making!
        </button>
      </div>
    </div>
  );
};

export default Drawing;
