import CheckOut from "./CheckOut";
import "./basket.css"
// import img from "../assets/iphone-13-pro.jpg";
import SubTotal from "./SubTotal";
const Basket = ({ buy, sum, desconut }) => {
  return (
    <>
      <div className="basket__subtotal">
        <h2 className="basket__trm">Your Shopping Basket</h2>
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
};
 
export default Basket;