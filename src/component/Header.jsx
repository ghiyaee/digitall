import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ item }) => {
  return (
    <>
      <div className="header__container">
        <Link to="/" style={{ margin: "20px" }}>
          <i className="home big orange icon"></i>
        </Link>
        <div className="header__logo">
          <i className="mobile big icon" />
          <h2 className="header__text">Digi Shop</h2>
        </div>

        <div className="header__searchbar">
          <input type="text" className="header__search" />
          <i className="search icon big  icon__searchbar"></i>
        </div>

        <div className="navbar">
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello User</span>
            <span className="nav__item__Sign">Sign In</span>
          </div>
          <div className="nav__item">
            <span className="nav__itemLineOne">Your</span>
            <span className="nav__item__shop">Shop</span>
          </div>
          <div className="nav__item">
            <Link to="/bk">
              <span className="nav__itemLineOne">
                <i className="shopping cart big icon orange"></i>
              </span>
            </Link>
            <span className="nav__itemLineTwo">{item}</span>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
