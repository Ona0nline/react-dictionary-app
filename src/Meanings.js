import React from "react";
import "./Meanings.css"
import Synonyms from "./Synonyms";

export default function Meanings(props){
  const displayedMeanings = props.meanings.slice(0, 5);

   return (
    <div className="meaning">
      <div className="meaning-box">
        {displayedMeanings.length > 0 ? (
        displayedMeanings.map((meaning, index) => (
          <div key={index}>
            <strong>Definition {index + 1}:</strong> {meaning.definition}<br/>
            <Synonyms synonyms={meaning.synonyms[0]}/><br/>
            {/* <strong>Synonym {index + 1}:</strong> {meaning.synonyms[0]}<br/><br/> */}

          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
      </div>
      
  );
}