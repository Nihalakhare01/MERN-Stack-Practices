function clicks(){
    console.log("Hello!");
}

function doubleclicks(){
    console.log("Double clicked!");
}


function hovers(){
    console.log("hovered!");
}


export default function Button() {
    return(
        <>
        <button onClick={clicks}>Click me</button>
        <p onMouseOver={hovers}>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Culpa qui ipsum 
            dolorem provident accusamus omnis rem
             voluptas numquam placeat? Quo ullam 
             soluta quibusdam cum fugiat tenetur 
             magnam ab molestias non.</p>
        <button onDoubleClick={doubleclicks}>double Click me</button>
        </>
        
    )
}