
function hadlesubmissions(event){
    event.preventDefault();
    console.log("form was submitted");
}

export default function Form(){
    return(
        <>
        <form action=""  onSubmit={hadlesubmissions}>
            <input type="text" placeholder="write something.." />
            <button onClick={hadlesubmissions}>Submit</button>
        </form>
        </>
    )
}