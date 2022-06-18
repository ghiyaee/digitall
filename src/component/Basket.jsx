import CheckOut from "./CheckOut";
import "./basket.css";
// import img from "../../src/img/download.png";
import SubTotal from "./SubTotal";
import Login from "./Login";
import imgempt from "../contaxt/img/imgempt.jpg";
import { MyContext } from "../contaxt";
import { useContext } from "react";
const Basket = ({}) => {
  const{  sum, user,total }=useContext(MyContext)
  console.log(sum);
  if (!user.active) {
        <Login/>
    }
    return (
      <>
        <div className="basket">
          <SubTotal />
          <div className={`basket__empty ${total === 0 ? "" : "hiden"}`}>
            <img src={imgempt} alt="" />
          </div>
          {/* <h2 className={`basket__empty`}>
            Please a First All Login
          </h2> */}
          <CheckOut />
        </div>
      </>
    );
  
  
};

export default Basket;


// ${user.active === false ? '' : "hiden"}