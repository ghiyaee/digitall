import "./home.css"
import img from "../assets/imagebk.png";
import Products from "./Products";
const Home = () => {
    return (
      <>
        <div className="home__container">
          <img src={img} alt="" className="home__image"/>
          <div className="product__row">
            <Products />
            <Products />
          </div>
          <div className="product__row">
            <Products />
            <Products />
             <Products/>
          </div>
          <div className="product__row"></div>
          <Products/>
        </div>
      </>
    );
}
 
export default Home;