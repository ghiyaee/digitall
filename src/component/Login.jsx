import { useState ,useRef} from "react";
import "./login.css";
const Login = ({login}) => {
    const onRef = useRef();
    const [email, setImail] = useState('');
    const [password,setPassword]=useState('')
    const loginHandel = () => {
        login(email, password)
        setImail('')
        setPassword('')
    }
  return (
    <>
      <div className="login__container">
        <div className="login__logo">
          <i className="mobile  big icon" />
          <h2 className="header__text">Digi Shop</h2>
        </div>
        <div className="login__sing">
          <input type="text"  placeholder="E-mail" onChange={e=>{setImail(e.target.value)}} value={email} />
          <input type="text"  placeholder="PassWord" onChange={e=>{setPassword(e.target.value)}} value={password}/>
          <button className="login__btn__sin" onClick={loginHandel}>Sign In</button>
          <p>By Useing && Buying Please a Create Account a Short Time</p>
          <button className="login__btn__crt">Create Account</button>
        </div>
      </div>
    </>
  );
};

export default Login;
