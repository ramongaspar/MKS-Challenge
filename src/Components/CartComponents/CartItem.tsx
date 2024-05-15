//retorna um componente que contém as informações do ITEM ; possuí funcionalidades de interação com o contéudo do carrinho

import { useEffect, useState } from 'react'
import { ProductObject } from '../ProductsComponents/ProductsGrid'
import { useDispatch } from 'react-redux';
import { lessItem, moreItem, removeItem } from '../../features/cart/cartSlice';
import SmoothAppear from '../MotionComponents/SmoothAppear';

function CartItem({item}:{item:{id:number,text:ProductObject,counter:number}}) {
  const [currItem, setCurrItem] = useState(item.text);
  useEffect(() => {
    setCurrItem(item.text);
  }, [item]);

  if (!item) {
    return <></>
  }

  
  const dispatch = useDispatch()
  const handleClickLess = ()=>{
    dispatch(lessItem(item))
    if(item.counter <= 1){
      dispatch(removeItem(item))
    }
  }
  const price = (parseInt(currItem.price) * item.counter).toString()

  return (
    <SmoothAppear className='item-container'>
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
          <h3 className="price">R${price}</h3>
        </div>  
            
        <span onClick={()=>dispatch(removeItem(item))} className='remove-button'>x</span>  
      </div>
   
    </SmoothAppear>
  )
}

export default CartItem