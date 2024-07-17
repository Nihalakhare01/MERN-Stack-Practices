import { useState } from "react"

export default function Commentform(){

        let [formdata, setFormData] = useState({
            username: "",
            remarks: "",
            rating: 5,
        });

        let Inputhandler = (event) => {
            setFormData((currData) => {
                return{
                    ...currData, [event.target.name] : event.target.value
            };
        });
        }

        let formhandler = (event) => {
                event.preventDefault();
                console.log(formdata)
                setFormData({
                    username: "",
                    remarks: "",
                    rating: 5,
                });
        }


    return( 
        <>
            <h1>Give a comment!</h1>
            <form action="" onSubmit={formhandler}>
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="username" value={formdata.username} onChange={Inputhandler}/>
                <br /><br /><br /><br />
                <label htmlFor="remarks">Remarks</label>
                <textarea name="remarks" id="remarks" value={formdata.remarks} placeholder="remarks" onChange={Inputhandler}> Remarks</textarea>
                <br /><br /><br /><br />
                <label htmlFor="rating">Rating</label>
                <input name="rating" id="rating" placeholder="rating" type="number" value={formdata.rating} onChange={Inputhandler} />
                <br /><br /><br /><br />
                <button>Add Comment</button>
            </form>
        </>
    )
}