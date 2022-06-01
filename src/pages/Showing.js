import { React, useState, useEffect } from "react";
import styles from "../css/Showing.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getKeyword } from "../Keyword";

const Showing = () => {
  const [lyricInput, setLyricInput] = useState("");
  const [result, setResult] = useState();
  const [keyword, setKeyword] = useState();

  const navigate = useNavigate();
  const goHomepage = () => {
    navigate("/");
  };

  useEffect(() => {
    setKeyword(getKeyword());
    console.log(keyword);

    if (keyword === "pig") {
      setLyricInput("돼지");
    }
  }, [keyword]);

  //hook으로 감쌀 예정
  //useCallback 쓸듯
  async function onSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:5000/test", { content: "허수아비가" })
      .then((res) => {
        console.log("Success");
        console.log(res);
      })
      .catch((error) => {
        console.log("Network Error : ", error);
      });
  }

  return (
    <div>
      {/* 메뉴바 */}
      <div className={styles.semiMenu}>
        <div className={styles.logo} onClick={goHomepage}>
          Meta4Music
        </div>
      </div>

      {/* content영역 */}
      <div className={styles.showingBody}>
        <div>
          <p>🎨 그림을 바탕으로 자신만의 음악🎵을 만들어보세요!</p>
        </div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="lyric"
            className={styles.showingInput}
            value={lyricInput}
            onChange={(e) => setLyricInput(e.target.value)}
          />
          <input
            type="submit"
            className={styles.showingBtn}
            value="Generate Music🎼"
          />
        </form>
        <div>{result}</div>
      </div>
    </div>
  );
};

export default Showing;
