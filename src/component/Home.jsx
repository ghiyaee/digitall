import "./home.css";
import imgbk from "../../src/img/imagebk.png";
import Products from "./Products";
import Footer from "./Footer";
const Home = ({ product, addItem ,alert}) => {
  return (
    <div className="home">
      <div className="home__container">
       
        <img src={imgbk} alt="imag" className="home__image" />
        <div className="home__row">
          <Products pro={product} items={addItem} alert={alert}/>
        </div>
        <div className="home__row">
          <Products pro={product} items={addItem} alert={alert}/>
          
        </div>
        <div className="home__row">
          <Products pro={product} items={addItem} alert={alert}/>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
