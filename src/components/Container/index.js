import React from 'react'
import './style.css'

function Container(props) {
    return (
        <div class="jumbotron jumbotron-fluid text-center">
            <div class="container">
                <h1 class="display-4">Avengers Memory Game!</h1>
                <p class="lead">There's only one rule... don't click the same image twice! Best of luck!</p>
                        <div className="header">
                            <div className="title">{props.children}</div>
                            <div className="scores"> Score: {props.score} Highscore: {props.highscore}
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Container;