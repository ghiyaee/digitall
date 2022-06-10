import Header from "./component/Header";
import Home from "./component/Home";
import Basket from "./component/Basket";
import img from "../src/img/iphone-13-pro.jpg";
import img1 from "../src/img/apple-iphone-13.jpg";
import img2 from "../src/img/apple-iphone-12-pro-max.jpg";
import Login from "./component/Login";
import { useState ,useReducer} from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Footer from "./component/Footer";
import Regester from "./component/Regester";
import SearchBar from "./component/SearchBar";
const App = () => {
  const products = [
      {
        id: 1,
        titel: 'iphone 13 pro max 256G',
        price:3500,
        imgs:img,
        star: 4,
        mess: 'Choice to buy',
      
    },
    {
      id: 2,
      titel: ' iphone 13  128G',
      price: 2500,
      imgs: img1,
      star: 3,
       mess: 'Choice to buy',
     
    },
    {
      id: 3,
      titel: ' iphone 12 pro  128G',
      price:1800,
      imgs: img2,
      star: 4,
      mess: 'Choice to buy',
     
    },
  ]

const  info =  { user: 'manoochehr',pass:1234,email:'ghiyaee@gmail.com' ,active:false}
    
 
   const [infoU,setInfo]=useState(info)
  
  //this products
  const [product, setProducts] = useState(products)

  //this new list select buy
  const [buy, setBuy] = useState([])

  //this sum buy
  let [total, setTotal] = useState(0)

  //this counter buy
  const [addBasket, setAddBasket] = useState(0)

  const [value,setValue]=useState('')
  const [user,setUser]=useState('')
  const [pass, setPass] = useState('')
  const [email,setEmail]=useState('')
 
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
  const login = ( user,active ) => {
    setUser(user)
    setInfo(active)
  }
  const regester = (user,pass,email) => {
    setUser(user)
    setPass(pass)
    setEmail(email)
  }
  const searchValue = (value) => {
   setValue(value.current.value);
  }
    return ( 
      <>
        <Router>
          <Header item={addBasket} user={user} searchValue={searchValue }/>
          <Routes>
             <Route path="/" element={<Home product={product} addItem={addHandel} />}/>
             <Route path="/bk" element={<Basket total={addBasket} buy={buy} sum={total} desconut={descHandel} user={infoU} login={login }/>}>
              <Route path="hr" element={<Header />} />
            </Route>
            <Route path="/lo" element={<Login login={login} info={infoU }/>} />
            <Route path="/rg" element={<Regester reg={regester} />} />
            <Route path="/sr" element={<SearchBar product={product} searchValue={value} addItem={addHandel }/> }/>
          </Routes>
         </Router>
        </>
     );
}
 
export default App;