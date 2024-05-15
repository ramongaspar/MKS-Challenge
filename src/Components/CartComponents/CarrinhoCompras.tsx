//retorna a barra lateral que exibe os itens presentes no carrinho do usuário

import { useSelector } from "react-redux"
import { ProductObject } from "../ProductsGrid" 
import { useEffect, useState } from "react"
import CartItem from "./CartItem"

function CarrinhoCompras({closeBar, barStatus}:{closeBar:React.Dispatch<React.SetStateAction<boolean>>,barStatus:boolean}) {
    const [totalPrice, setTotal] = useState(0)
    //função para ocultar esse componente
    const handleClose = ()=>{
        closeBar(!barStatus)
    }

    const myCart = useSelector((state:any)=>state.cart)
    
    useEffect(()=>{
    console.log(myCart)
      if(myCart.length){
        console.log(myCart)
        const total = myCart.reduce((acc:number, item:{text:ProductObject,counter:number},  )=>{
           
          return ( parseInt(item.text.price) * (item.counter))  + acc    
        },0)
        console.log(total)
        setTotal(total)
      }else setTotal(0)
    },[myCart])
    
    const cartItems = myCart.map((item:{id:number,text:ProductObject,counter:number})=>{
        return(
            <CartItem key={item.id} item={item}></CartItem>
        )
    }) 

    //later
    const handleCheckout = ()=>{}  

    return (
        <div className="side-bar">
            <div className="side-bar-top">
                <h2>Carrinho<br></br>de compras</h2>
                <h2 className="x-button" onClick={handleClose}><span>x</span></h2>
            </div>
            <div className="side-bar-items">
                <div className="items-content">
                    {cartItems}
                </div>
                <div className="bottom-price">
                    <h2>Total:</h2>
                    <h2>R${totalPrice.toString()}</h2>
                </div>
            </div>
            <div className="side-bar-bottom">
                <h2 onClick={handleCheckout}>Finalizar Compra</h2>
            </div>
        </div>
    )
}

export default CarrinhoCompras