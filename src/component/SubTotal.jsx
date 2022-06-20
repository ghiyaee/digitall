import "./subtotal.css"
import { MyContext } from "../contaxt";
import { useContext } from "react";
const SubTotal = () => {
  const { addBasket, total } = useContext(MyContext);
    return (
      <>
        <div className="subtotal">
          <div className="subtotal__left">
            <h2 className="basket__trm">Your Shopping Basket</h2>
          </div>
          <div className="subtotal__right">
            <div className="subtotal__price">
              <span>SubTotal: {addBasket} items</span>
              <span> $</span>
              <span>{total}</span>
            </div>
            <button className="subtotal__btn">Proceed CheckOut </button>
          </div>
        </div>
      </>
    );
}
 
export default SubTotal;