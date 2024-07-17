import { useState, useEffect } from "react";

export  default function Counter(){
    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let inCountx = () => {
        setCountx(currCount => currCount +1);
    }
    let inCounty = () => {
        setCounty(currCount => currCount +1);
    }

    useEffect(function printSomething(){
        console.log("this is side-effect");
    }, [countx]); 

    return(
        <>
            <h3>Count = {countx}</h3>
            <button onClick={inCountx}>+1</button>
            <h3>Count = {county}</h3>
            <button onClick={inCounty}>+1</button>
        </>
    );
} 