import React, { useEffect, useState } from 'react'
import { ProductObject } from '../ProductsGrid'
import { useDispatch } from 'react-redux';
import { lessItem, moreItem, removeItem } from '../../features/cart/cartSlice';

function CartItem({item}:{item:{id:number,text:ProductObject,counter:number}}) {
  const [currItem, setCurrItem] = useState(item.text);
  useEffect(() => {
    setCurrItem(item.text);
  }, [item]);

  if (!currItem) {
    return null; // ou algum componente de carregamento/spinner
  }
  // Verificação para garantir que currItem esteja definido antes de tentar acessá-lo
  
  const dispatch = useDispatch()
  const handleClickLess = ()=>{
    dispatch(lessItem(item))
    if(item.counter === 0){
      dispatch(removeItem(item))
    }
    
    
  }
  return (
    <div className='item-container'>
      <div className="cart-item">
        <div className="left-side">
          <div className="img-container">
            <img src={currItem.photo}></img>
          </div>
          <h3>{currItem.name}</h3>
        </div>
        <div className="right-side"> 
          <div className="counter-container">
            <span className="upper">Qtd:</span>
            <h3 className="cart-counter">
              <span onClick={handleClickLess} className="counter-span">-</span>
              <span className="item-qtd">{item.counter}</span>
              <span onClick={()=>dispatch(moreItem(item))} className="counter-span">+</span>
            </h3>
          </div> 
          <h3 className="price">R${currItem.price.slice(0,currItem.price.length - 3)}</h3>
        </div>  
            
      </div>
      <span onClick={()=>dispatch(removeItem(item))} className='remove-button'>x</span>  
    </div>
  )
}

export default CartItem