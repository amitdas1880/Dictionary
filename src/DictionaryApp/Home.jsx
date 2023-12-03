import React, { useState } from "react";
import Component from "./Component";
import axios from 'axios';
import './Dictionary.css';
import Navbar from "./Navbar";

//const Msg = createContext();
const Home = ()=>{
    const [word , setword]=useState('');
    const [result, setResult] = useState('');
    
    const Api = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const handleSearch =async() =>{
        try{
            const response = await axios.get(Api);
            setResult(response.data[0]);
           console.log(response);
        }
        catch (Error){console.log('Error')}
    }
   
    
    //console.log(result);
    
    return(
        <>
         {/* <Msg.Provider value={{...{result}}}> */}
        
        <Navbar/>
        <div className="inputbar">
        <input type="text" value={word}
                onChange={(e)=>(setword(e.target.value))}/>

            <button type="submit" onClick={handleSearch}>Search</button>
        </div>
{/*         
         <Component/>
            </Msg.Provider> */}
            {result && <Component {...{result}}/>}
        
        </>
    )
}

export default Home ;
//export {Msg};