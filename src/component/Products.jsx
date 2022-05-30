
import React from "react";
import "./products.css"
const Products = ({imag,titel,price,star,id}) => {
  return (
    <React.Fragment key={id}>
      <div className="product__container" >
        <img src={imag} alt="" className="product__img" />
        <div className="product__info">
          <p>{titel}</p>
          <p>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          {Array(star).fill().map((_,i) => (
            <i className="star yellow icon"></i>
          ))}
        </div>
        <button className="product__buy">Buy</button>
      </div>
    </React.Fragment>
  );
};

export default Products;
