import React, { useContext } from "react";
import "./products.css";
import { MyContext } from "../contaxt";
const Products = () => {
  const { product, addHandel } = useContext(MyContext);
  const renderList = product.map((item, index) => {
    return (
      <div className="product__container" key={item.id}>
        <img src={item.imgs} alt="" className="product__img" />
        <div className="product__info">
          <p>{item.titel}</p>
          <p>
            <small>$</small>
            <strong>{item.price}</strong>
          </p>
          {Array(item.star).fill()
            .map((_,i) => (
              <i className="star yellow icon" key={i}></i>
              ))}
        </div>
        <button onClick={() => addHandel(item,index)} className="product__buy">
          {item.mess}
        </button>
      </div>
    );
  });
  return <>{renderList}</>;
};
export default Products;
