import { useState} from "react";
import { Link } from "react-router-dom";
import "./login.css";
const Login = ({ login, info }) => {
  let { user, email, pass, active } = info
  console.log(active);
  const [emaill, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandel = () => {
    if (email == emaill && pass == password) {
      active=true
      login(user,active);
      setEmail("");
      setPassword("");
    } else {
       return;
    }
  }
  return (
    <>
      <div className={`login__container `}>
        <div className="login__logo">
          <i className="mobile  big icon" />
          <h2 className="header__text">Digi Shop</h2>
        </div>
        <div className="login__sign">
          <Link to={'/'}>
          <i className="close link large red icon "></i>
          </Link>
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={emaill}
          />
          <input
            type="text"
            placeholder="PassWord"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <button className="login__btn__sin" onClick={loginHandel}>
            Sign In
          </button>
          <p>By Useing && Buying Please a Create Account a Short Time</p>
          <Link to='/rg'>
          <button className="login__btn__crt">Create Account</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
