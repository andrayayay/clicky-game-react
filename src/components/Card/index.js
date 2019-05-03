import React from "react";
import "./style.css"
 
function imageCard(props){
  return (
    <div className="image">
      <img alt={props.name} src={props.image}/>
    </div>
  )
}
  export default imageCard;
  