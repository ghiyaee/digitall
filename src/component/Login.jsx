import { useState ,useRef} from "react";
import "./login.css";
const Login = () => {
    const onRef = useRef();
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
          <input type="text" name="" id="" placeholder="E-mail" onChange={e=>{setImail(e.target.value)}} value={email} />
          <input type="text" name="" id="" placeholder="PassWord" onChange={e=>{setPassword(e.target.value)}} value={password}/>
          <button className="login__btn__sin" onClick={()=>console.log(email,password)}>Sign In</button>
          <p>By Useing && Buying Please a Create Account a Short Time</p>
          <button className="login__btn__crt">Create Account</button>
        </div>
      </div>
    </>
  );
};

export default Login;
