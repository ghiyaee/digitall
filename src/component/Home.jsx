import "./home.css"
import imgbk from "../assets/imagebk.png";
import img from "../assets/iphone-13-pro.jpg";
import Products from "./Products";
const Home = () => {
    return (
      <>
        <div className="home">
          <div className="home__container">
            <img src={imgbk} alt="" className="home__image" />
            <div className="home__row">
              <Products
                titel={"iphone 13 pro max 256G"}
                price={1800}
                imag={img}
                star={5}
              />
              <Products
                titel={"iphone 13 pro  128G"}
                price={1500}
                imag={img}
                star={4}
              />
            </div>
            <div className="home__row">
              <Products
                titel={"iphone 13 256G"}
                price={1100}
                imag={img}
                star={3}
              />
              <Products
                titel={"iphone 13 mini 256G"}
                price={800}
                imag={img}
                star={3}
              />
              <Products
                titel={"iphone 12 pro max 256G"}
                price={800}
                imag={img}
                star={5}
              />
            </div>
            <div className="home__row"></div>
            <Products
              titel={"iphone 13 pro 256G"}
              price={800}
              imag={img}
              star={2}
            />
          </div>
        </div>
      </>
    );
}
 
export default Home;