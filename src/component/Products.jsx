import img from "../assets/iphone-13-pro.jpg";
import "./products.css"
const Products = () => {
  return (
    <>
      <div className="product__container">
        <img src={img} alt="" />
        <div className="product__info">
          <p>titel</p>
          <p>price</p>
          <i className="star yellow icon"></i>
          <i className="star yellow icon"></i>
          <i className="star yellow icon"></i>
          <i className="star yellow icon"></i>
        </div>
        <button className="">Buy</button>
      </div>
    </>
  );
};

export default Products;
