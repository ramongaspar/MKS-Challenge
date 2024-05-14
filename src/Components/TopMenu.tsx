import BotaoCarrinho from "./BotaoCarrinho"

function TopMenu() {
    return (
      <nav className="top-menu">
        <div className="top-menu-content">
          <div className="left-side">
            <h2 className="title">MKS <span>Sistemas</span></h2>
          </div>
          <BotaoCarrinho></BotaoCarrinho>
        </div>
      </nav>
    )
}

export default TopMenu