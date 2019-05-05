import React from 'react'
import './style.css'

function CharacterCard(props) {
    return (
        // <div className="card" onClick={() => props.clickCount(props.id)}></div>
            <div className="character-card">
                <img alt={props.name} src={props.image} />
        </div> 
    )
}

export default CharacterCard