import CheckOut from "./CheckOut";
import "./basket.css";
import img from "../../src/img/download.png";
import SubTotal from "./SubTotal";
import Login from "./Login";
import imgempt from "../../src/img/imgempt.jpg";

const Basket = ({ buy, sum, desconut, user, login, total }) => {
  console.log(user.active);
  if (!user.active) {
        <Login/>
    }

    return (
      <>
        <div className="basket">
          <SubTotal total={sum} item={total} />
          <div className={`basket__empty ${sum === 0 ? "" : "hiden"}`}>
           <img src={imgempt} alt="" />
          </div>
          {/* <h2 className={`basket__empty`}>
            Please a First All Login
          </h2> */}
          <CheckOut buy={buy} desconut={desconut} />
        </div>
      </>
    );
  
  
};

export default Basket;


// ${user.active === false ? '' : "hiden"}