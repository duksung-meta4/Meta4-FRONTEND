import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import styles from "../css/Drawing2.module.css";
import { useNavigate } from "react-router-dom";
import ml5 from "ml5";
import pen from "../img/pen.png";
import eraser from "../img/eraser.png";
import fill from "../img/fill.png";
import trash from "../img/trash.png";

const Drawing2 = () => {
  const navigate = useNavigate();
  const goHomepage = () => {
    navigate("/");
  };

  const sketch = (p5) => {
    let classifier;
    let canvas;
    let clearButton;
    let final_keyword;
    let labelSpan1, labelSpan2, labelSpan3, labelSpan4, labelSpan5;
    let confidenceSpan1,
      confidenceSpan2,
      confidenceSpan3,
      confidenceSpan4,
      confidenceSpan5;

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

      final_keyword = p5.select("#final_keyword");

      labelSpan1 = p5.select("#label_1");
      confidenceSpan1 = p5.select("#confidence1");

      labelSpan2 = p5.select("#label_2");
      confidenceSpan2 = p5.select("#confidence2");

      labelSpan3 = p5.select("#label_3");
      confidenceSpan3 = p5.select("#confidence3");

      labelSpan4 = p5.select("#label_4");
      confidenceSpan4 = p5.select("#confidence4");

      labelSpan5 = p5.select("#label_5");
      confidenceSpan5 = p5.select("#confidence5");
    };

    p5.clearCanvas = () => {
      p5.background(255);
    };

    p5.draw = () => {
      p5.strokeWeight(16);
      p5.stroke(0);
      if (p5.mouseIsPressed === true) {
        p5.line(p5.pmouseX, p5.pmouseY, p5.mouseX, p5.mouseY);
      }
    };

    const gotResult = (error, results) => {
      //console.log("Classify Callback");

      if (error) {
        console.error(error);
      }

      // console.log(results[0].confidence);
      // console.log(final_keyword);
      // console.log(labelSpan1);

      final_keyword.html(results[0].label);

      labelSpan1.html(results[0].label);
      confidenceSpan1.html(Math.floor(100 * results[0].confidence));

      labelSpan2.html(results[1].label);
      confidenceSpan2.html(Math.floor(100 * results[1].confidence));

      labelSpan3.html(results[2].label);
      confidenceSpan3.html(Math.floor(100 * results[2].confidence));

      labelSpan4.html(results[3].label);
      confidenceSpan4.html(Math.floor(100 * results[3].confidence));

      labelSpan5.html(results[4].label);
      confidenceSpan5.html(Math.floor(100 * results[4].confidence));

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
        <p className={styles.title}>🎨 자유롭게 그림을 그려주세요!</p>
        <div className={styles.palette}>
          <div className={styles.colorpalette}>
            <div
              className={styles.red}
              style={{ backgroundColor: "#D8313A" }}
            ></div>
            <div
              className={styles.orange}
              style={{ backgroundColor: "#FF7F49" }}
            ></div>
            <div
              className={styles.yellow}
              style={{ backgroundColor: "#FFC000" }}
            ></div>
            <div
              className={styles.green}
              style={{ backgroundColor: "#77A56B" }}
            ></div>
            <div
              className={styles.skyblue}
              style={{ backgroundColor: "#6ED5D0" }}
            ></div>
            <div
              className={styles.blue}
              style={{ backgroundColor: "#47729A" }}
            ></div>
            <div
              className={styles.purple}
              style={{ backgroundColor: "#7D64AD" }}
            ></div>
            <div
              className={styles.black}
              style={{ backgroundColor: "#272727" }}
            ></div>
          </div>
          <div className={styles.toolpalette}>
            <img src={pen} alt="pen.png" />
            <img src={eraser} alt="pen.png" />
            <img src={fill} alt="pen.png" />
            <img id="clearBtn" src={trash} alt="pen.png" />
          </div>
        </div>
        <ReactP5Wrapper sketch={sketch}></ReactP5Wrapper>
        <p className={styles.drawresult}>
          <span id="final_keyword" style={{ color: "#0085A1" }}></span> 을
          그리셨군요!
        </p>
        <p className={styles.resultRanking}>
          <button style={{ backgroundColor: "#EB8287" }}>
            <span id="label_1"></span>(<span id="confidence1"></span>%)
          </button>
          <button style={{ backgroundColor: "#FF8F60" }}>
            <span id="label_2"></span>(<span id="confidence2"></span>%)
          </button>
          <button style={{ backgroundColor: "#FFF279" }}>
            <span id="label_3"></span>(<span id="confidence3"></span>%)
          </button>
          <button style={{ backgroundColor: "#1DDDC4" }}>
            <span id="label_4"></span>(<span id="confidence4"></span>%)
          </button>
          <button style={{ backgroundColor: "#54ACFE" }}>
            <span id="label_5"></span>(<span id="confidence5"></span>%)
          </button>
        </p>
        <p className={styles.letstart}>작사를 시작하겠습니다</p>
        <button className={styles.makeLyricsBT}>Start making</button>
      </div>
    </div>
  );
};

export default Drawing2;