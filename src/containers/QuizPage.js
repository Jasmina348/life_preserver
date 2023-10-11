import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import './quizpagecss.css'

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

  return (
    <>
    <NavBar/>
    <div className="quiz-container">
    <form action="/action_page.php">
        <p className="question"> 1. Please select your favorite Web language:</p>
        
        <input className="input" type="radio" id="html" name="fav_language" value="HTML"/>
        <label className='formlabel' for="html">HTML</label>
        <input className="input" type="radio" id="css" name="fav_language" value="CSS"/>
        <label className='formlabel' for="css">CSS</label>
        <input className="input" type="radio" id="javascript" name="fav_language" value="JavaScript"/>
        <label className='formlabel' for="javascript">JavaScript</label>
        <button type="submit" className="submit-button" id="subbtn">Submit</button>
    </form>
    </div>    
    </>
  )    
}
