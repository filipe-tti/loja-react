import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <section>
          <a href="#home" >
            <img src="../src/img/logo.png" alt="logo" className="logo"/>
          </a>

          <nav className="navbar">
            <a href="#home">Home</a>
            <a href="#about">Sobre</a>
            <a href="#menu">Menu</a>
            <a href="#review">Avaliações</a>
            <a href="#address">Endereço</a>
          </nav>

          <div className="icons">
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/30/ffffff/search--v1.png"
              alt="search--v1"
              className="icon-header"
            />

            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/ffffff/shopping-cart--v1.png"
              alt="shopping-cart--v1"
              className="icon-header"
            />
          </div>
        </section>
      </header>
    </div>
  );
};

export default Header;
