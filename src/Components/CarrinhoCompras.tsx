
function CarrinhoCompras({closeBar, barStatus}:{closeBar:React.Dispatch<React.SetStateAction<boolean>>,barStatus:boolean}) {

    const handleClose = ()=>{
        closeBar(!barStatus)
    }
    const handleCheckout = ()=>{}  
    return (
        <div className="side-bar">
            <div className="side-bar-top">
                <h2>Carrinho<br></br>de compras</h2>
                <h2 className="x-button" onClick={handleClose}><span>x</span></h2>
            </div>
            <div className="side-bar-items">
                <div className="items-content">
                    
                </div>
                <div className="bottom-price">
                    <h2>Total:</h2>
                    <h2>R$599</h2>
                </div>
            </div>
            <div className="side-bar-bottom">
                <h2 onClick={handleCheckout}>Finalizar Compra</h2>
            </div>
        </div>
    )
}

export default CarrinhoCompras