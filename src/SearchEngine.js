import React, {useState} from "react";
import axios from "axios";
import "./SearchEngine.css"

export default function SearchEngine(){
  const[word,setWord] = useState("")

  function handleResponse(response){
    console.log(response)
  }

  const url = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=444t95o4afedabca0957fcb3605bfd54`
  axios.get(url).then(handleResponse)


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