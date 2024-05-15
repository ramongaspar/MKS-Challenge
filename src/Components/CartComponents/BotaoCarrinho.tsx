import { useEffect, useState } from 'react'
import CarrinhoCompras from './CarrinhoCompras'
import { useSelector } from 'react-redux'

function BotaoCarrinho() {
    const [quantidade, setQuantidade] = useState(0)
    const [topBar, setTopBar] = useState(false)
    const handleClick = ()=>{
        setTopBar(!topBar)
    }
    
    const myCart = useSelector((state:any)=>state.cart)
    useEffect(()=>{
        const qtd = myCart.length
        setQuantidade(qtd)
    },[myCart])

    return (
        <div className='b-carrinho'>
            <div onClick={handleClick} className='b-carrinho-content' >
                <img src='src/assets/images/carrinho_compras.png'></img>
                <h3>{quantidade}</h3>
            </div>
            {topBar && <CarrinhoCompras closeBar={setTopBar} barStatus={topBar}></CarrinhoCompras>}
        </div>
    )
}

export default BotaoCarrinho