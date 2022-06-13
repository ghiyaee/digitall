import React from "react";
import Products from "./Products";
import "./searchbar.css";

const SearchBar = ({ product, searchValue, addItem }) => {
  let filter = '';
  let renderList='';
  if (searchValue) {
    filter = product.filter((fil) =>
      fil.titel.includes(searchValue.toLowerCase())
    );
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
              .map(() => (
                <i className="star yellow icon"></i>
              ))}
          </div>
          <button onClick={() => addItem(item)} className="product__buy">
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
