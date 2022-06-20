import "./header.css";
import { Link } from "react-router-dom";
import { useRef ,useContext} from "react";
import { logDOM } from "@testing-library/react";
import { MyContext } from "../contaxt/index";
const Header = () => {
  const {  addBasket,user,searchValue } = useContext(MyContext);
  const onRefTop = useRef();
   const onRefBotttom = useRef();
  const searchHandelTop = () => {
    searchValue(onRefTop.current.value)
    onRefTop.current.value=''
  }
    const searchHandelBottom = () => {
      searchValue(onRefBotttom.current.value);
      onRefBotttom.current.value = "";
    };
  return (
    <>
      <div className="positon">
        <div className="header__container">
          <div className="header__logo">
            <i className="mobile big icon" />
            <Link to="/">
              <h2 className="header__text">Digi Shop</h2>
            </Link>
          </div>

          <div className="header__searchbar ">
            <input type="text" className="header__search" ref={onRefTop} />
            <Link to="/sr">
              <i
                className="search icon big icon__searchbar"
                onClick={searchHandelTop}
              ></i>
            </Link>
          </div>

          <div className="navbar ">
            <Link to="/" style={{ margin: "20px" }}>
              <i className="home big inverted icon"></i>
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
                  <i className="shopping cart big icon inverted "></i>
                </span>
              </Link>
              <span className="nav__itemLineTwo">{addBasket}</span>
            </div>
          </div>
        </div>
        <div className="header__searchbar__bottom ">
          <input type="text" className="header__search" ref={onRefBotttom} />
          <Link to="/sr">
            <i
              className="search icon big icon__searchbar__bottom"
              onClick={searchHandelBottom}
            ></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
