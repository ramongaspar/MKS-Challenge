
import { ProductObject } from "./ProductsGrid"

function Product({product}:{product:ProductObject}) {


  return (
    <div className="product-container">

      <div className="content-container">
        <div className="photo-container"><img src={product.photo}></img></div>
        <div className="info-container">
          <div className="name-container">
            <p>{product.name}</p>
            <h3>R${product.price.slice(0,product.price.length - 3)}</h3>
          </div>
          <p className="extra">Redesigned from scratch and completely revised.</p>
        </div>
      </div>

     
      <div className="buy-button-container">
        <img src="/src/assets/images/shopping-bag.png"></img>
        <h3 className="buy">Comprar</h3>
      </div>
     
    
    </div>
  )
}

export default Product