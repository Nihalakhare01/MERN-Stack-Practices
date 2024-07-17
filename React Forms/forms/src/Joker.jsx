import { useState, useEffect } from "react";

export default function Joker() {
    let [joke, setJoke] = useState({});

      const URL = "https://official-joke-api.appspot.com/random_joke";

      const getJoke = async() => {
        let response = await fetch(URL); 
        let jsonResponse = await response.json();
        console.log(jsonResponse);  
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
      }

      useEffect( () => {async function getFirstJoke(){
        let response = await fetch(URL); 
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline}); 
      }
      getFirstJoke();
    },[]);


    return (
        <>
            <h1>Joker!</h1>
            <h3>{joke.setup}</h3>
            <h4>{joke.punchline}</h4>
            <button onClick={getJoke}>New Joke</button>
        </>
    )
}