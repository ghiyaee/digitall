import CheckOut from "./CheckOut";
import "./basket.css"
import img from "../../src/download.png";
import SubTotal from "./SubTotal";
import Login from "./Login";
const Basket = ({ buy, sum, desconut, user,login }) => {
  if (user) {
    return (
      <>
        <div className="basket__subtotal">
          <h2 className="basket__trm">Your Shopping Basket</h2>
          <i class="shopping basket violet massive icon"></i>
          <div className="basket__price">
            <SubTotal total={sum} />
          </div>
        </div>
        <hr />
        <h2 className={`basket__empty ${sum === 0 ? "" : "hiden"}`}>
          Empty Your Basket
        </h2>
        <div className="basket__container">
          <div className="basket__product">
            <img src={""} alt="" />
            <div className="basket__titel">
              <CheckOut buy={buy} desconut={desconut} />
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <><Login login={ login}/></>
  }
  
};
 
export default Basket;