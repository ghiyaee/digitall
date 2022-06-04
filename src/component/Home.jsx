import "./home.css";
import imgbk from "../../src/imagebk.png";
import Products from "./Products";
const Home = ({ product, addItem }) => {
  return (
    <div className="home">
      <div className="home__container">
        <img src={imgbk} alt="imag" className="home__image" />
        <div className="home__row">
          <Products pro={product} items={addItem} />
        </div>
        <div className="home__row">
          <Products pro={product} items={addItem} />
          <Products pro={product} items={addItem} />
        </div>
        <div className="home__row">
          <Products pro={product} items={addItem} />
        </div>
      </div>
    </div>
  );
};

export default Home;
