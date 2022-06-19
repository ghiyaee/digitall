import React from "react";
import Products from "./Products";
import "./searchbar.css";
import { MyContext } from "../contaxt";
import { useContext } from "react";
const SearchBar = () => {
  const { product, value, addItem, addHandel } = useContext(MyContext);
  let filter = '';
  let renderList='';
  if (value) {
    filter = product.filter((fil) =>
      fil.titel.includes(value.toLowerCase()))
      renderList = filter.map((item) => {
      return (
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
              .map((_,i) => (
                <i className="star yellow icon" key={i}></i>
              ))}
          </div>
          <button onClick={() => addHandel(item)} className="product__buy">
            {item.mess}
          </button>
        </div>
      );
    })
  }
  else {
    return (
      <>
        <div className="searchbar__empty">
          <i className="hand pointer big icon"></i>
          <h2> SearchBar a Empty Please a Inter Name Product Favorite</h2>
        </div>
      </>
    );
   } 
  
  return (
    <>{renderList}</>
  );
  }
export default SearchBar;
