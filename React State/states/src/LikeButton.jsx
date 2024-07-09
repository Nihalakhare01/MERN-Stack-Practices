import { useState } from "react";



export default function LikeButton(){
let [isliked, setisliked] = useState(false);
let [count, isclick] = useState(0);

    function clicks(){
        setisliked(!isliked);
        isclick(count+1);
    };

    let styles = {
        color: "red",
    }
   return( 
    <>
    <p>count is {count}</p> 
    <p onClick={clicks}>
        {
            isliked ?  
            (<i className="fa-solid fa-heart" style={styles}></i>)
                : (<i class="fa-regular fa-heart"></i>)

        }
        
    </p>
    </>
   ) 
}