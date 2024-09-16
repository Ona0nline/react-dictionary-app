import React from "react";

export default function Synonyms(props){
  if (props.synonyms){
    return <div>Synonym: <i>{props.synonyms}</i><br/></div>
  }else{
    return null
  }
}