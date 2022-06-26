import React from "react";
import "./checkOut.css"
import { MyContext } from "../contaxt";
import { useContext } from "react";
const CheckOut = () => {

  const { buy, descHandel, addHandel } = useContext(MyContext);
  const newlist=[...new Set(buy)]
  const renderItem = newlist.map((item, index) => {
    return (
      <div className="checkout__container" key={index}>
        <div className="checkout__info">
          <div className="chechout__img">
            <img src={item.imgs} alt="" />
          </div>
          <div className="checkout__titel">
            <p>{item.titel}</p>
            <div>
              <div className="checkout__items">
                <small>$</small>
                <strong>{item.price}</strong>
                <div className="ckeckout__add__sub">
                  {/* <span className="ckeckout__sum"  onClick={()=>addHandel}> + </span> */}
                  <span>items({item.counter})</span>
                  {/* <span className="ckeckout__sum">-</span> */}
                </div>
              </div>
            </div>
            {Array(item.star)
              .fill()
              .map((_, i) => (
                <i className="star yellow icon" key={i}></i>
              ))}
            <button
              onClick={() => descHandel(item, index)}
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