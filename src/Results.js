import React from "react";
import "./Results.css"

export default function Results(props){
  // console.log(props.result)
  if(props.results === null){
    return "no result"
  }else {
    return (<div className="result">
      
      <div className="result-box">
        <h2>{props.word}</h2>
        <p>{props.results}</p>
      </div>
      
  </div>)
    
  }
  
}