import CheckOut from "./CheckOut";
import "./basket.css";
// import img from "../../src/img/download.png";
import SubTotal from "./SubTotal";
import Login from "./Login";
import imgempt from "../contaxt/img/imgempt.jpg";
import { MyContext } from "../contaxt";
import { useContext } from "react";
const Basket = () => {
  const { user, infoU,total } = useContext(MyContext)
  console.log(user)
  if ('') {
    return <Login  />
    }
    return (
      <>
        <div className="basket">
          <SubTotal />
          <div className={`basket__empty ${total === 0 ? "" : "hiden"}`}>
            <img className="basket__img" src={imgempt} alt="" />
          </div>
          <CheckOut />
        </div>
      </>
    );
  
  
};

export default Basket;


// ${user.active === false ? '' : "hiden"}