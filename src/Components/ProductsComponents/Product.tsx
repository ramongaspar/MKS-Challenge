//componente que renderiza cada produto individual com suas informações para o grid.

import { useDispatch } from "react-redux"
import { addItem } from "../../features/cart/cartSlice"
import { ProductObject } from "././ProductsGrid"


function Product({product}:{product:ProductObject}) {
  const dispatch = useDispatch()
  const addCart = ()=>{
    dispatch(addItem(product)) 
  }
  
  return (
    <div className="product-container">
      <div className="content-container">
        <div className="photo-container"><img alt="Product Photo" src={product.photo}></img></div>
        <div className="info-container">
          <div className="name-container">
            <p>{product.name}</p>
            <h3>R${product.price.slice(0,product.price.length - 3)}</h3>
          </div>
          <p className="extra">Redesigned from scratch and completely revised.</p>
        </div>
      </div>
      <div onClick={addCart} className="buy-button-container">
        <img src="https://github.com/ramongaspar/MKS-Challenge/blob/main/src/assets/images/shopping-bag.png?raw=true"></img>
        <h3 className="buy">Comprar</h3>
      </div>
    </div>
  )
}

export default Product
