import './Activity.css';
import Price from "./Price.jsx";

export default function Activity({title, idx}) {
    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,998", "9,199", "899", "278"];
    let description = [
        ["8,00 DPI", "5 Programmable buttons"],
        ["intutive surface", "designed for ipad pro"],
        ["designed for iPad Pro", "intuitive surface"],
        ["wireless", "optical orientation"],
    ];
    return(
        <div className="Activity">
                <h4>{title}</h4>
                <p>{description[idx][0]}</p>
                <p>{description[idx][1]}</p>
                <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
        </div>
    );
}