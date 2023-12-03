import React from "react";
//import { Msg } from "./Home";
const Component = ({result})=>{
//    const {result}=useContext(Msg);
    console.log({result});
    const {word , phonetics , meanings}=result;

    return(
        <><div className="card">
        <h1>word:{word}</h1>
        <p>{phonetics[0].text}</p>
        <a href={phonetics[1].audio} className="audio">Audio Play</a>
         <h3>{meanings[0].partOfSpeech}</h3>
          <p>{meanings[0].definitions[0].definition}</p> 
          <h3>{meanings[1].partOfSpeech}</h3>
        <p>{meanings[1].definitions[0].definition}</p>
        </div>
      
        </>
    )
}
export default Component;

//