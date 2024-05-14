import React, { useState } from 'react'

function Carrinho() {
  const [quantidade, setQuantidade] = useState(0)

  const handleClick = ()=>{}
  return (
    <div onClick={handleClick} className='carrinho'>
        <img src='src/assets/images/carrinho_compras.png'></img>
        <h3>{quantidade}</h3>
    </div>
  )
}

export default Carrinho