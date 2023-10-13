import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../static/data/data.json";
import "./quizpagecss.css";

export default function QuizPage() {
  //     const [quizData, SetQuizData] = useState([]);

  //   const fetchData = () => {
  //     return fetch("https://gist.github.com/cmota/f7919cd962a061126effb2d7118bec72")
  //           .then((response) => response.json())
  //           .then((data) => SetQuizData(data))
  //   }

  //   useEffect(() => {
  //     fetchData();
  //   },[])
  const { id } = useParams();
  console.log(data);
  const item = data.modules.find((element) => element.id == id);
  console.log(item);
  return (
    <>
      {item.quizzes.map((data) => (
        <div className="quiz-container">
          <form action="">
            <p className="question"> {data.question}</p>
            {data.options.map((option) => (
              <>
                <input
                  className="input"
                  type="radio"
                  id="html"
                  name="fav_language"
                  value="HTML"
                />
                 {" "}
                <label className="formlabel" for="html">
                  {option}
                </label>
              </>
            ))}
             
          </form>
        </div>
      ))}
      <button type="submit" className="submit-button" id="subbtn">
        Submit
      </button>
    </>
  );
}
