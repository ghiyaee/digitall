import React from "react";
import { useState,createContext } from "react";
import img from "../contaxt/img/iphone-13-pro.jpg";
import img1 from "../contaxt/img/apple-iphone-13.jpg";
import img2 from "../contaxt/img/apple-iphone-12-pro-max.jpg";
import img3 from "../contaxt/img/samsung a23.jpg";
import img4 from "../contaxt/img/samsung s20.jpg";
import img5 from "../contaxt/img/google p6.jpg";
import img6 from "../contaxt/img/xiaomi t11.jpg";

const MyContext = createContext();
const MyProvider = ({ children }) => {
    const products = [{
        id: 1,
        titel: 'iphone 13 pro max 256G',
        price: 3500,
        imgs: img,
        star: 5,
        mess: 'Choice to buy',
        counter:0
    },
    {
        id: 2,
        titel: ' iphone 13  128G',
        price: 2500,
        imgs: img1,
        star: 4,
        mess: 'Choice to buy',
       counter: 0
    },
    {
        id: 3,
        titel: ' iphone 12 pro  128G',
        price: 1800,
        imgs: img2,
        star: 4,
        mess: 'Choice to buy',
        counter: 0
    },
    {
        id: 4,
        titel: ' samsung s20  128G',
        price: 1800,
        imgs:  img4,
        star: 5,
        mess: 'Choice to buy',
        counter: 0
    },
    {
        id: 5,
        titel: ' samsung a23  128G',
        price: 1800,
        imgs: img3,
        star: 3,
        mess: 'Choice to buy',
        counter: 0
    },
    {
        id: 6,
        titel: ' google p6  128G',
        price: 1800,
        imgs:  img5,
        star: 4,
        mess: 'Choice to buy',
         counter: 0
    },
    {
        id: 7,
        titel: 'xiaomi t11  128G',
        price: 1800,
        imgs: img6,
        star: 3,
        mess: 'Choice to buy',
        counter: 0
    },
    ]
    const [product, setProduct] = useState(products)
    let [conter,setConter]=useState(0)
   const info = {
        user: 'user1',
        pass: 1234,
        email: 'user1@gmail.com',
        active: false
    }
   
 

    const [infoU, setInfo] = useState(info)

    //this new list select buy
    const [buy, setBuy] = useState([])
    //this sum buy
    let [total, setTotal] = useState(0)

    //this counter buy
    const [addBasket, setAddBasket] = useState(0)
    const [value, setValue] = useState('')
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')
    //this is function add counter basket and new list buying and total price buying
    const addHandel = (item, index) => {
        let newItem = item;
        newItem.counter++
        setAddBasket(addBasket + 1);
        setBuy(buy.concat(newItem));
        setTotal(total += item.price);
    }
    //this is function desCount basket and remove a list buying and desTotal price buying
    const descHandel = (item,e) => {
        setAddBasket(addBasket <= 0 ? addBasket = 0 : addBasket - 1)
        setBuy(buy.filter((item,index )=> index != e))
        setTotal(total -= item.price)
    }
    const login = (user, active) => {
        setUser(user)
        setInfo(active)
        console.log(active);
    }
    const regesterHandel = (user, pass, email) => {
        setUser(user)
        setPass(pass)
        setEmail(email)
    }
    const searchValue = (onRef) => {
        setValue(onRef);
    }

    return (
        < MyContext.Provider value={
            {
               product, infoU, buy, total, addBasket, value, user, pass, email,conter, addHandel, descHandel, login, regesterHandel, searchValue
            }
            
        } >
          {children}
        </MyContext.Provider>
)
    
}

export {MyContext,MyProvider}