import { useState } from "react";

function init(){
    console.log("init executed!");
    return Math.random();
}

export default function Counter(){
    // let [count, setCount] = useState(0);
    let [count, setcount] = useState(init);
    console.log("Component executed!");

    let incount=() => {
        setCount(count+1);
    };

    // function callback
    // setCount((currcount) => {
    //     return count +1;
    // });
    // setCount((currcount) => {
    //     return count +1;
    // })

    return( 
        <>
            <h3></h3>
            <button onClick={incount}>Count is {count}</button>
        </>
    )
}