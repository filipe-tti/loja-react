import "./Menu.css"

const Menu = () => {
  return (
    <div>
        <section className="menu" id="menu">
            <h2 className="title">Nosso <span>Menu</span></h2>
            
            <div className="box-container">

              <div className="box">
                <img src="../src/img/menu-1.png" alt="item-1" />
                <h3>Produto 1</h3>
                <div className="price">RS15,99 <span>20,99</span></div>
                <a href="#" className="btn">Adcione ao carrinho</a>
              </div>

              <div className="box">
                <img src="../src/img/menu-2.png" alt="item-2" />
                <h3>Produto 2</h3>
                <div className="price">RS15,99 <span>20,99</span></div>
                <a href="#" className="btn">Adcione ao carrinho</a>
              </div>

              <div className="box">
                <img src="../src/img/menu-3.png" alt="item-3" />
                <h3>Produto 3</h3>
                <div className="price">RS15,99 <span>20,99</span></div>
                <a href="#" className="btn">Adcione ao carrinho</a>
              </div>

              <div className="box">
                <img src="../src/img/menu-4.png" alt="item-4" />
                <h3>Produto 4</h3>
                <div className="price">RS15,99 <span>20,99</span></div>
                <a href="#" className="btn">Adcione ao carrinho</a>
              </div>

              <div className="box">
                <img src="../src/img/menu-5.png" alt="item-5" />
                <h3>Produto 5</h3>
                <div className="price">RS15,99 <span>20,99</span></div>
                <a href="#" className="btn">Adcione ao carrinho</a>
              </div>

              <div className="box">
                <img src="../src/img/menu-6.png" alt="item-6" />
                <h3>Produto 6</h3>
                <div className="price">RS15,99 <span>20,99</span></div>
                <a href="#" className="btn">Adcione ao carrinho</a>
              </div>

            </div>

        </section>
    </div>
  )
}

export default Menu