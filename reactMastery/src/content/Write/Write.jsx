import { use, useState } from "react";

function Write() {
  const [count, setCount] = useState([0, 0, 0]);
  let [titles, setTitles] = useState([
    "남자 코트 추천",
    "여자 코트 추천",
    "강남 우동 맛집",
  ]);
  return (
    <div>
      <h4>글쓰기</h4>
      <input type="text" placeholder="제목" />
      <textarea placeholder="내용"></textarea>
      <button>작성하기</button>
    </div>
  );
}

export default Write;
