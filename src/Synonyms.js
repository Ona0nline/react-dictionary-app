import React from "react";
import "./Results.css"

export default function Synonyms(props){
  if (props.synonyms){
    return <div>Synonym: 
      <div className="inline-synonyms">
      <i>{props.synonyms.map(function(synonym,index){
        return <span className="synonym" key={index}>{synonym}|</span>
      })}</i>
 
      </div>
      <br/></div>
  }else{
    return null
  }
}