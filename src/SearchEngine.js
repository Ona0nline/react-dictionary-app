import React, {useState} from "react";
import axios from "axios";
import Results from "./Results"
import "./SearchEngine.css"
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import Images from "./Images"

export default function SearchEngine(){
  const[word,setWord] = useState("")
  const[result,setResult] = useState("")
  const[meaning, setMeaning] = useState([])
  const[phonetics,setPhonetics] = useState("")
  const[image,setImage] = useState(null)
  const[alt,setAlt] = useState("")
  

  function handleDictionaryResponse(response){
    console.log(response.data)
    setResult(response.data.meanings[0].definition)
    setMeaning(response.data.meanings)
    setPhonetics(response.data.phonetic)

  }

  function handleImageResponse(response){
    console.log(response.data.photos)
    setImage(response.data.photos)
    setAlt(response.data.photos)

  }
  


  function handleSubmit(event){
    event.preventDefault();
  const url = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=444t95o4afedabca0957fcb3605bfd54`
  axios.get(url).then(handleDictionaryResponse)

  const imageKey = "444t95o4afedabca0957fcb3605bfd54"
  const imageUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${imageKey}`
  axios.get(imageUrl).then(handleImageResponse)
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
  <Images images={image} alt={alt}/>

    </div>
    


}