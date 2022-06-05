import { useState ,useRef} from "react";
import "./login.css";
const Login = () => {
    const ref = useRef();
    const [email, setImail] = useState('');
    const [password,setPassword]=useState('')

  return (
    <>
      <div className="login__container">
        <div className="login__logo">
          <i className="mobile  big icon" />
          <h2 className="header__text">Digi Shop</h2>
        </div>
        <div className="login__sing">
          <input type="text" name="" id="" placeholder="E-mail"/>
          <input type="text" name="" id="" placeholder="PassWord"/>
          <button className="login__btn__sin">Sign In</button>
          <p>By Useing && Buying Please a Create Account a Short Time</p>
          <button className="login__btn__crt">Create Account</button>
        </div>
      </div>
    </>
  );
};

export default Login;
