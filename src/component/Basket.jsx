import CheckOut from "./CheckOut";
import "./basket.css"
import img from "../assets/iphone-13-pro.jpg";
import SubTotal from "./SubTotal";
const Basket = () => {
    return (  
        <>
            <div className="basket__subtotal">
               <h2 className="basket__trm">Your Shopping Basket</h2>
                <div className="basket__price">
                    <SubTotal/>
                </div>
            </div>
            <div className="basket__container">
                   <div className="basket__product">
                    <img src={img } alt="" />
                     <div className="basket__titel">
                        <CheckOut/>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Basket;