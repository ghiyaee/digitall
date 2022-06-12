import React from "react";
import Products from "./Products";
import "./searchbar.css";
const SearchBar = ({ product, searchValue, addItem }) => {
   console.log(searchValue);
    const filter = product.filter((fil) => fil.titel.includes(searchValue));
    const renderList = filter.map((item) => {
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
              .map((_, i) => (
                <i className="star yellow icon"></i>
              ))}
          </div>
          <button onClick={() => addItem(item)} className="product__buy">
            {item.mess}
          </button>
        </div>
      );
    });
  
  return (
    <>{renderList}</>
  );
  }
export default SearchBar;
