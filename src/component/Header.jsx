import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ item,user }) => {
  return (
    <>
      <div className="header__container">
        <div className="header__logo">
          <i className="mobile big icon" />
          <h2 className="header__text">Digi Shop</h2>
        </div>

        <div className="header__searchbar">
          <input type="text" className="header__search" />
          <i className="search icon big  icon__searchbar"></i>
        </div>

        <div className="navbar">
            <Link to="/" style={{ margin: "20px" }}>
              <i className="home big orange icon"></i>
            </Link>
          <div className="nav__item">
            <Link to="/lo" className="nav__link">
              <span className="nav__itemLineOne nav__user">{`  ${user}  `}</span>
              <span className="nav__item__Sign">Sign In</span>
            </Link>
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
