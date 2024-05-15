import BotaoCarrinho from "./CartComponents/BotaoCarrinho"

function TopMenu() {
    return (
      <nav className="top-menu">
        <div className="top-menu-content">
          <div className="left-side">
          <a href="/"><h2 className="title">MKS <span>Sistemas</span></h2></a>
          </div>
          <BotaoCarrinho></BotaoCarrinho>
        </div>
      </nav>
    )
}

export default TopMenu