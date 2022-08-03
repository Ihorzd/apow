import { FC } from "react";
import './login.scss'

const Login:FC = () => {
    return(
        <div className="login">
            <div className="loginImgContainer">
                <h3>PLAYGROUND</h3>
                <img src="/img/login/image1.png"/>
            </div>
            <div className="loginTxtContainer">
                <h4>Login</h4>
                <input />
                <button>SEND CODE</button>
            </div>
        </div>
    )
}
export default Login;