import React from "react";
import "./Results.css"

export default function Phonetics(props){
  if (props.phonetics){
    return <div className="phonetic">Phonetic: {props.phonetics}</div>
  }else{
    return null
  }
}