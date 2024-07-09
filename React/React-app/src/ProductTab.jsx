import Product from "./Product.jsx";
function ProductTab() {
    
//  let features = [<li>'hi-tech'</li>,<li>'durable'</li> ,<li>'fast'</li> ];
//  let features2 = { a: "hi-tech", b: "durable", c: "fast"};
let features = ['hi-tech','durable' ,'fast' ];    
return(
        <>
        <Product title="Phone" price={20000} features={features}
            options = {["hi-tech"]}
        />
        <Product title="laptop" price={60000} />
        <Product title="Pen" price={500} />

        </>
    )
}

export default ProductTab;