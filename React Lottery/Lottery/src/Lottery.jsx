import { useState } from "react";
import "./Lottery.css";
import { genticket,sum } from "./helper.js";


export default function Lottery(){

    let [ticket, setTicket] = useState(genticket(3));
    let iswinning = sum(ticket) === 15;

      let buyticket = () => {
        setTicket(genticket(3)); 
      }

    return(

        <>
            <h1>Lottery Game!</h1>

            <div className="ticket">
                 <span>{ticket[0]}</span>
                 <span>{ticket[1]}</span>
                 <span>{ticket[2]}</span>
            </div>
            <br /><br />
            <button onClick={buyticket}>Buy Ticket</button>
            <br /><br />
            <h3>{iswinning && "congratulations, you won!"}</h3>
        </>

    );

}