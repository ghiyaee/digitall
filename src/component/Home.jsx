import "./home.css";
// import imgbk from "../../src/img/imagebk.png";
import Products from "./Products";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
       
        <img src={''} alt="imag" className="home__image" />
        <div className="home__row">
            <Products/>
        </div>
        <div className="home__row">
          <Products />
        </div>
        <div className="home__row">
          <Products/>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
