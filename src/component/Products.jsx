
import React from "react";
import "./products.css"
import Alert from "./Alert";
const Products = ({ pro, items ,alert}) => {
  console.log(pro);
  const renderList = pro.map((item) => {
    return (
      <React.Fragment key={item.id}>
        <div className="product__container">
          <img src={item.imgs} alt="" className="product__img" />
          <div className="product__info">
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
          </div>
          <button onClick={() => items(item)} className="product__buy">
            Buy
          </button>
        </div>
      </React.Fragment>
    );
  });
  return <>{renderList}</>;
};
export default Products;
