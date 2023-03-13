import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [logo, setLogo] = useState("ReactBlog");
  let [title, setTitle] = useState("강남 우동 맛집");
  let [title2, setTitle2] = useState("강남 우동");
  let [title3, setTitle3] = useState("강남");
  let [따봉, c] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>
          {title} <span onClick={{}}>좋아요</span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>
          {title2}
          <span>좋아요</span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>
          {title3}
          <span>좋아요</span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
