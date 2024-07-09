import "./Product.css"


function Product({title, price, features }) {
    // console.log(features);
    // const list = features.map((feature) => 
    //     <li>{feature}</li>
    //     );
        let styles = { backgroundColor: price > 30000 ? "pink" : "" };
    
    return(
        <div className="product" style={styles}>
            <h3>{title}</h3>
            <h5>Price: {price} </h5>
            <p>
              { price > 40000 ? <p>5% discount</p> : null}
            </p>
        </div>
    )
}

export default Product;