import React, {useState} from "react";
import "./SearchEngine.css"

export default function SearchEngine(){
  
  let[word,setWord] = useState("")

  function handleSubmit(event){
    event.preventDefault();
    alert(`Submitted: ${word}`)
  }

  function handleNewWord(event){
    console.log(event)
    setWord(event.target.value)

  }

  return <form className="form" onSubmit={handleSubmit}>
    <input className="search" onChange={handleNewWord} type="search" placeholder="What's the word?" value={word} />
    <input className="submit" type="submit" value="Definition"/>

  </form>
}