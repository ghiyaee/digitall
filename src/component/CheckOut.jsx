import React from "react";
import "./checkOut.css"

const CheckOut = ({ buy, desconut }) => {
  const renderItem = buy.map((item) => {
    return (
      <>
        <div className="checkout__container">
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
                  <i className="star yellow icon"></i>
                ))}
              <button onClick={() => desconut(item)} className="checkout__buy">
                <i className="trash icon"></i>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <>
      {renderItem}
    </>
  );
};
 
export default CheckOut;