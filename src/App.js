import Header from "./component/Header";
import Home from "./component/Home";
import Basket from "./component/Basket";
import img from "../src/iphone-13-pro.jpg";
import img1 from "../src/apple-iphone-13.jpg";
import img2 from "../src/apple-iphone-12-pro-max.jpg";
import { useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
const App = () => {
  const products = [
      {
        id: 1,
        titel: 'iphone 13 pro max 256G',
        price: 1800,
        imgs:img,
        star:4
    },
    {
      id: 2,
      titel: ' iphone 13  128G',
      price: 1200,
      imgs: img1,
      star: 3
    },
    {
      id: 3,
      titel: ' iphone 12 pro  128G',
      price: 1000,
      imgs: img2,
      star: 4
    },
  ]
  const [product, setProducts] = useState(products)
  const [buy, setBuy] = useState([])
  let [total,setTotal]=useState(0)
  const [addBasket, setAddBasket] = useState(0)
  const [alert, setAlert] = useState(false)
  
  const addHandel = (item) => {
    console.log(item.price);
    setAddBasket(addBasket + 1)
    setBuy(buy.concat(item)) 
    setTotal(total += item.price)
    setAlert(true)
  }
  
  const descHandel = (e) => {
    console.log(e.id);
    setAddBasket(addBasket <= 0 ? addBasket = 0 : addBasket - 1)
    const des=buy.filter(item=> item.id != e.id)
    setBuy(des)
    setTotal(total-=e.price)
  }
    return ( 
      <>
        <Router>
          <Header item={ addBasket}/>
          <Routes>
            < Route path="/" element={<Home product={product} addItem={addHandel} alert={alert }/>}/>
            < Route path="/bk" element={<Basket total={addBasket} buy={buy} sum={total} desconut={descHandel }/>}>
              <Route path="hr" element={<Header /> }/>
               </Route>
          </Routes>
         </Router>
        </>
     );
}
 
export default App;