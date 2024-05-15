import { useSelector } from "react-redux"
import { ProductObject } from "../ProductsGrid" 
import { useEffect, useState } from "react"
import CartItem from "./CartItem"

function CarrinhoCompras({closeBar, barStatus}:{closeBar:React.Dispatch<React.SetStateAction<boolean>>,barStatus:boolean}) {
    const [total, setTotal] = useState(0)
    const handleClose = ()=>{
        closeBar(!barStatus)
    }

    const myCart = useSelector((state:any)=>state.cart)
    useEffect(()=>{
      if(myCart.length){
        console.log(myCart)
        const total = myCart.reduce((acc:number, item:{text:ProductObject}, counter:number, )=>{
          return ( parseInt(item.text.price) * (counter + 1))  + acc    
        },0)
        
        setTotal(total)
      }
    },[myCart])
    
    const cartItems = myCart.map((item:{id:number,text:ProductObject,counter:number})=>{
        return(
            <CartItem key={item.id} item={item}></CartItem>
        )
    }) 

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
                    <h2>R${total.toString()}</h2>
                </div>
            </div>
            <div className="side-bar-bottom">
                <h2 onClick={handleCheckout}>Finalizar Compra</h2>
            </div>
        </div>
    )
}

export default CarrinhoCompras