import Activity from "./Activity.jsx";

export default function Activitytab() {
    let styles = {
            display : "flex",
            flexWrap : "wrap",
            justifyContent: "center",
            alignItems: "center",
    };
    return(
        <div style={styles}>
            
            <Activity title="Logitech MX Master" idx={0} />
            <Activity title="Apple pencil (2nd Gen)" idx={1} />
            <Activity title="Zebronics Ze-transformer" idx={2} />
            <Activity title="Petronics Toad 23" idx={3} />

        </div>
    );
}