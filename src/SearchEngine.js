import React, {useState} from "react";
import axios from "axios";
import Results from "./Results"
import "./SearchEngine.css"
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

export default function SearchEngine(){
  const[word,setWord] = useState("")
  const[result,setResult] = useState("")
  const[meaning, setMeaning] = useState([])
  const[phonetics,setPhonetics] = useState("")

  function handleResponse(response){
    console.log(response.data)
    setResult(response.data.meanings[0].definition)
    setMeaning(response.data.meanings)
    setPhonetics(response.data.phonetic)

  }

  


  function handleSubmit(event){
    event.preventDefault();
  const url = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=444t95o4afedabca0957fcb3605bfd54`
  axios.get(url).then(handleResponse)
  }

  function handleNewWord(event){
    setWord(event.target.value)

  }

  return <div>
    <form className="form" onSubmit={handleSubmit}>
    <input className="search" onChange={handleNewWord} type="search" placeholder="What's the word?" value={word} />
    <input className="submit" type="submit" value="Definition"/>

  </form>
  <Results word={word} results={result}/>
  <Phonetics phonetics={phonetics}/>
  <Meanings meanings={meaning}/>

    </div>
    


}