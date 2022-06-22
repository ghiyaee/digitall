import React from "react";
import "./checkOut.css"
import { MyContext } from "../contaxt";
import { useContext } from "react";
const CheckOut = () => {
  const { buy, descHandel } = useContext(MyContext);
  const newlist = [...new Set(buy)];
  const renderItem = newlist.map((item,index) => {
    return (
     
        <div className="checkout__container" key={index}>
          <div className="checkout__info">
            <div className="chechout__img">
              <img src={item.imgs} alt="" />
            </div>
            <div className="checkout__titel">
              <p>{item.titel}</p>
              <p>
                <small>$</small>
                <strong>{item.price}</strong>
              </p>
              {Array(item.star)
                .fill()
                .map((_, i) => (
                  <i className="star yellow icon" key={i}></i>
                ))}
              <button
                onClick={() => descHandel(item,index)}
                className="checkout__buy"
              >
                <i className="trash icon"></i>
              </button>
            </div>
          </div>
        </div>
  
    );
  });
  return (
    <>
      {renderItem}
    </>
  );
};
 
export default CheckOut;