import { useState } from "react"

export default function Forms() {
    let [formdata , setFormdata] = useState({
        fullName: "",
        userName: "",
        password: "",
    });
    

    let Inputchange = (event) => {

        setFormdata((currData) => {
            return {...currData, [event.target.name]: event.target.value};
        }); 
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formdata);
        setFormdata({
            fullName: "",
            userName: "",
            password: "",
        });
    };

    return(
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" placeholder="Enter Full Name" id="fullName" name="fullName" value={formdata.fullName} onChange={Inputchange}  /><br /><br />

            <label htmlFor="userName">User Name</label>
            <input type="text" placeholder="Enter UserName" id="userName" name="userName" value={formdata.userName} onChange={Inputchange}  /><br /><br />

            <label htmlFor="password">Password</label>
            <input type="text" placeholder="Enter Password" id="password" name="password" value={formdata.password} onChange={Inputchange}  /><br /><br />
            <button>Submit</button>
        </form>
    )
}  