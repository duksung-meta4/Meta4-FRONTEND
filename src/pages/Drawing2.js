import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import styles from "../css/Drawing2.module.css";
import { useNavigate } from "react-router-dom";
import ml5 from "ml5";

const Drawing2 = () => {
  const navigate = useNavigate();
  const goHomepage = () => {
    navigate("/");
  };

  const sketch = (p5) => {
    let classifier;
    let canvas;
    let clearButton;
    let labelSpan;
    let confidenceSpan;

    p5.preload = () => {
      classifier = ml5.imageClassifier("DoodleNet", () => {
        console.log("Module loaded");
      });
    };

    p5.setup = () => {
      canvas = p5.createCanvas(280, 280);
      p5.background(255);
      classifier.classify(canvas, gotResult);

      //삭제 버튼
      clearButton = p5.select("#clearBtn");
      clearButton.mousePressed(p5.clearCanvas);

      //결과
      labelSpan = p5.select("#label");
      confidenceSpan = p5.select("#confidence");
    };

    p5.clearCanvas = () => {
      p5.background(255);
    };

    p5.draw = () => {
      p5.strokeWeight(16);
      p5.stroke(0);
      if (p5.mouseIsPressed) {
        p5.line(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY);
      }
    };

    const gotResult = (error, results) => {
      console.log("Classify Callback");
      if (error) {
        console.error(error);
      }
      console.log(results);
      labelSpan.html(results[0].label);
      confidenceSpan.html(Math.floor(100 * results[0].confidence));
      classifier.classify(canvas, gotResult);
    };
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
        <p>🎨 자유롭게 그림을 그려주세요!</p>
        <button id="clearBtn">Clear Canvas</button>
        <ReactP5Wrapper sketch={sketch}></ReactP5Wrapper>
        <p>
          <span id="label"></span>(<span id="confidence"></span>%)
        </p>
      </div>
    </div>
  );
};

export default Drawing2;
