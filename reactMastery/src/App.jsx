import { use, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter, Link } from "react-router-dom";
import Write from "./content/Write/Write";
import Postlist from "./content/Postlist/Postlist";
import "./App.css";

function App() {
  const [count, setCount] = useState([0, 0, 0]);
  let [titles, setTitles] = useState([
    "남자 코트 추천",
    "여자 코트 추천",
    "강남 우동 맛집",
  ]);
  return (
    <div className="App">
      <div className="black-nav">
        <div>
          <Link to="/">Geuni</Link>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="main">
        <div className="title_image">
          <video
            src="../public/main_video.mp4"
            muted
            autoPlay
            loop
            type="video/mp4"
          ></video>
        </div>
        <Routes>
          <Route path="/content/Postlist" element={<Postlist />} />
          <Route path="/content/Write" element={<Write />} />
        </Routes>
      </div>
      <Link to="/content/Postlist">home</Link>
      <Link to="/content/Write">zz</Link>
    </div>
  );
}

export default App;
