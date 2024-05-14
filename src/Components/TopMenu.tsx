import Carrinho from "./Carrinho"

function TopMenu() {
  return (
    <nav className="top-menu">
      <div className="top-menu-content">
        <div className="left-side">
          <h2>MKS <span>Sistemas</span></h2>
        </div>
        <Carrinho></Carrinho>
      </div>
    </nav>
  )
}

export default TopMenu