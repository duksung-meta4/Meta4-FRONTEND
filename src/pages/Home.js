import React from "react";
import Menubar from "../components/Menubar";
import styles from "../css/Home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goDrawingPage = () => {
    navigate("/drawing2");
  };
  return (
    <div>
      {/* 메뉴바 부분 */}
      <Menubar />

      {/* 메뉴바 밑 content 영역 - 공통여백을 주기 위해 묶어줌 */}
      <div className={styles.content}>
        {/* 대문 */}
        <div className={styles.gate}>
          <h1>Music For you</h1>
          <p>make your own music!</p>
          <button onClick={goDrawingPage}>Let's start</button>
          <button>Meta4World!</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
