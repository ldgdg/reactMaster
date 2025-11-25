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
            <div
              className="post"
              key={i}
              onClick={() =>
                setModalOpen(modalOpen.map((m, j) => (j === i ? !m : false)))
              }
            >
              <div>
                <h4>{title}</h4>
                <p>2월 17일 발행</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    let newTitles = [];
                    let newCount = [];
                    let newModalOpen = [];
                    titles.map((t, j) => (j === i ? null : newTitles.push(t)));
                    count.map((c, j) => (j === i ? null : newCount.push(c)));
                    modalOpen.map((m, j) =>
                      j === i ? null : newModalOpen.push(m)
                    );
                    setModalOpen(newModalOpen);
                    setCount(newCount);
                    setTitles(newTitles);
                  }}
                >
                  삭제
                </button>
              </div>
              <div onClick={(e) => e.stopPropagation()}>
                <span
                  onClick={() => {
                    setCount(count.map((c, j) => (j === i ? c + 1 : c)));
                  }}
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
      <div className="write">
        <input type="text" />
        <button
          onClick={() => {
            let input = document.querySelector(".write input");
            let newTitles = [...titles];
            let newCount = [...count];
            let newModalOpen = [...modalOpen];
            input.value ? newTitles.push(input.value) : null;
            input.value ? newCount.push(0) : null;
            input.value ? newModalOpen.push(false) : null;
            setModalOpen(newModalOpen);
            setCount(newCount);
            setTitles(newTitles);
            input.value = "";
          }}
        >
          글 발행
        </button>
      </div>
      <div
        className="modalist"
        onClick={() => {
          let newModalOpen = modalOpen.map(() => false);
          setModalOpen(newModalOpen);
        }}
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
