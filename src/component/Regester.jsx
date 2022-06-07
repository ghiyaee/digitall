import "./regester.css"
import { Link } from "react-router-dom";
import { useState } from "react";
const Regester = ({reg}) => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    const regester = () => {
        if (user === '' || pass === '' || email === '') {
            return
        } else {
            reg(user, pass, email)
            setUser('')
            setPass("");
            setEmail("");
            
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
            <Link to={"/"}>
              <i className="close link large red icon "></i>
            </Link>
            <input
              type="text"
              placeholder="UserName"
              onChange={(e) => {
                setUser(e.target.value);
              }}
              value={user}
            />
            <input
              type="text"
              placeholder="PassWord"
              onChange={(e) => {
                setPass(e.target.value);
              }}
              value={pass}
            />
            <input
              type="email"
              placeholder="E-mail"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
            {/* <button className="login__btn__sin" onClick={loginHandel}>
              Sign In
            </button> */}
            {/* <p>By Useing && Buying Please a Create Account a Short Time</p> */}
            <button className="login__btn__crt" onClick={regester}>Create Account</button>
          </div>
        </div>
      </>
    );
}
 
export default Regester;