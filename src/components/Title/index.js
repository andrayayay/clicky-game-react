import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div class="jumbotron jumbotron-fluid text-center">
    <div class="container">
        <h1 class="display-4">Avengers Memory Game!</h1>
        <p class="lead">Don't click the same image more than once! Good luck!</p>

        <div className="scores">
          Score: {props.score} Highscore: {props.highscore}
           </div>
        </div>
    </div>
  )
  
}

export default Title;