import { atom } from "recoil";

let keywordState = atom({
  key: "keyword",
  default: "",
});

export default keywordState;
