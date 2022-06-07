import CheckOut from "./CheckOut";
import "./basket.css";
import img from "../../src/img/download.png";
import SubTotal from "./SubTotal";
import Login from "./Login";
import Footer from "./Footer";

const Basket = ({ buy, sum, desconut, user, login, total }) => {
  if (user) {
    return (
      <>
        <div className="basket">
          <SubTotal total={sum} item={total} />
          <h2 className={`basket__empty ${sum === 0 ? "" : "hiden"}`}>
            Empty Your Basket
          </h2>
          <CheckOut buy={buy} desconut={desconut} />
          <Footer />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Login login={login} />
      </>
    );
  }
};

export default Basket;
