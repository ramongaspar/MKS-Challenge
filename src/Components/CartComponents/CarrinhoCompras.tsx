//retorna a barra lateral que exibe os itens presentes no carrinho do usuário

import { useSelector } from "react-redux"
import { ProductObject } from "../ProductsComponents/ProductsGrid" 
import { useEffect, useState } from "react"
import CartItem from "./CartItem"
import { motion, AnimatePresence } from "framer-motion";


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
        <AnimatePresence>
            {barStatus && (
                <motion.div
                    className="side-bar"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 200, damping: 40 }}
                >
                    <div className="side-bar-top">
                        <h2>Carrinho<br />de compras</h2>
                        <h2 className="x-button" onClick={handleClose}><span>x</span></h2>
                    </div>
                    <div className="side-bar-items">
                        <div className="items-content">
                            {cartItems.length ? cartItems : <h2 className="sem-items">Sem items ainda..</h2>}
                        </div>
                        <div className="bottom-price">
                            <h2>Total:</h2>
                            <h2>R${totalPrice.toString()}</h2>
                        </div>
                    </div>
                    <div className="side-bar-bottom">
                        <h2 onClick={handleCheckout}>Finalizar Compra</h2>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default CarrinhoCompras