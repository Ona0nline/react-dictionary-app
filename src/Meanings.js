import React from "react";
import "./Meanings.css"

export default function Meanings(props){
   return (
    <div className="meaning">
      <div className="meaning-box">
        {props.meanings.length > 0 ? (
        props.meanings.map((meaning, index) => (
          <div key={index}>
            <strong>Definition {index + 1}:</strong> {meaning.definition}
          </div>
        ))
      ) : (
        <div></div>
      )}
    </div>
      </div>
      
  );
}