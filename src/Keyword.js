let keyword = "Hello";

export function setKeyword(text) {
  keyword = text;
  console.log(`설정한 keyword는 ${keyword}`);
}

export function getKeyword() {
  console.log(`가져온 keyword는 ${keyword}`);
  return keyword;
}
