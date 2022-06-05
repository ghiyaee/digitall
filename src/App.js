import Header from "./component/Header";
import Home from "./component/Home";
import Basket from "./component/Basket";
import img from "../src/iphone-13-pro.jpg";
import img1 from "../src/apple-iphone-13.jpg";
import img2 from "../src/apple-iphone-12-pro-max.jpg";
import Login from "./component/Login";
import { useState ,useReducer} from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
const App = () => {
  const products = [
      {
        id: 1,
        titel: 'iphone 13 pro max 256G',
        price: 1800,
        imgs:img,
        star: 4,
        mess: 'Choice to buy',
      
    },
    {
      id: 2,
      titel: ' iphone 13  128G',
      price: 1200,
      imgs: img1,
      star: 3,
       mess: 'Choice to buy',
     
    },
    {
      id: 3,
      titel: ' iphone 12 pro  128G',
      price: 1000,
      imgs: img2,
      star: 4,
      mess: 'Choice to buy',
     
    },
  ]

  //this products
  const [product, setProducts] = useState(products)

  //this new list select buy
  const [buy, setBuy] = useState([])

  //this sum buy
  let [total, setTotal] = useState(0)

  //this counter buy
  const [addBasket, setAddBasket] = useState(0)

  const [user,setUser]=useState('')
 
  //this is function add counter basket and new list buying and total price buying
  const addHandel = (item) => {
    setAddBasket(addBasket + 1)
    setBuy(buy.concat(item)) 
    setTotal(total += item.price)
   
  }
//this is function desCount basket and remove a list buying and desTotal price buying
  const descHandel = (e) => {
    setAddBasket(addBasket <= 0 ? addBasket = 0 : addBasket - 1)
    setBuy(buy.filter(item => item.id != e.id))
    setTotal(total-=e.price)
  }
  const login = (e,p) => {
    setUser(p)
  }
    return ( 
      <>
        <Router>
          <Header item={addBasket} user={user }/>
          <Routes>
             <Route path="/" element={<Home product={product} addItem={addHandel} />}/>
             <Route path="/bk" element={<Basket total={addBasket} buy={buy} sum={total} desconut={descHandel }/>}>
              <Route path="hr" element={<Header /> }/>
            </Route>
            <Route path="/lo" element={<Login login={login }/> }/>
          </Routes>
         </Router>
        </>
     );
}
 
export default App;