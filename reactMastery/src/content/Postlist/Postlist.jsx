import { use, useState } from "react";

function Modal({ title, date, content }) {
  return (
    <div className="modal">
      <div>
        <h4>{title}</h4>
        <p>{date}</p>
      </div>
      <p>{content}</p>
    </div>
  );
}

function Postlist() {
  const [count, setCount] = useState([0, 0, 0]);
  const [modalOpen, setModalOpen] = useState([false, false, false]);
  let [titles, setTitles] = useState([
    "남자 코트 추천",
    "여자 코트 추천",
    "강남 우동 맛집",
  ]);
  return (
    <div>
      <div className="post_list">
        {titles.map((title, i) => {
          return (
            <div className="post" key={i}>
              <div
                onClick={() =>
                  setModalOpen(modalOpen.map((m, j) => (j === i ? !m : false)))
                }
              >
                <h4>{title}</h4>
                <p>2월 17일 발행</p>
              </div>
              <div>
                <span
                  onClick={() =>
                    setCount(count.map((c, j) => (j === i ? c + 1 : c)))
                  }
                  style={{ cursor: "pointer" }}
                >
                  👍
                </span>
                {count[i]}
              </div>
            </div>
          );
        })}
      </div>
      <div
        className="modalist"
        onClick={() => setModalOpen([false, false, false])}
      ></div>
      {modalOpen.map((isOpen, i) =>
        isOpen ? (
          <Modal
            key={i}
            title={titles[i]}
            date={"2월 17일 발행"}
            content={"상세내용"}
          />
        ) : null
      )}
    </div>
  );
}

export default Postlist;
