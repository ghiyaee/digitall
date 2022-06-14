import { useState } from "react";


const MyContext = React.createContext();
const MyProvider = ({Children}) => {
 const products = [{
         id: 1,
         titel: 'iphone 13 pro max 256G',
         price: 3500,
         imgs: img,
         star: 5,
         mess: 'Choice to buy',

     },
     {
         id: 2,
         titel: ' iphone 13  128G',
         price: 2500,
         imgs: img1,
         star: 4,
         mess: 'Choice to buy',

     },
     {
         id: 3,
         titel: ' iphone 12 pro  128G',
         price: 1800,
         imgs: img2,
         star: 4,
         mess: 'Choice to buy',

     },
     {
         id: 4,
         titel: ' samsung s20  128G',
         price: 1800,
         imgs: img4,
         star: 5,
         mess: 'Choice to buy',

     },
     {
         id: 5,
         titel: ' samsung a23  128G',
         price: 1800,
         imgs: img3,
         star: 3,
         mess: 'Choice to buy',

     },
     {
         id: 6,
         titel: ' google p6  128G',
         price: 1800,
         imgs: img5,
         star: 4,
         mess: 'Choice to buy',

     },
     {
         id: 7,
         titel: 'xiaomi t11  128G',
         price: 1800,
         imgs: img6,
         star: 3,
         mess: 'Choice to buy',

     },
    ]
    const [product, setProduct] = useState(products)
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
    const addHandel = (item) => {
        setAddBasket(addBasket + 1)
        setBuy(buy.concat(item))
        setTotal(total += item.price)
    }
    //this is function desCount basket and remove a list buying and desTotal price buying
    const descHandel = (e) => {
        setAddBasket(addBasket <= 0 ? addBasket = 0 : addBasket - 1)
        setBuy(buy.filter(item => item.id != e.id))
        setTotal(total -= e.price)
    }
    const login = (user, active) => {
        setUser(user)
        setInfo(active)
    }
    const regester = (user, pass, email) => {
        setUser(user)
        setPass(pass)
        setEmail(email)
    }
    const searchValue = (onRef) => {
        setValue(onRef);
    }

return(
        <MyContext.Provider>
          {Children}
        </MyContext.Provider>
)
    
}

export {MyContext,MyProvider}