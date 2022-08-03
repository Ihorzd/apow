import { FC } from "react";
import './login.scss'

const Login: FC = () => {
    return (
        <div className="login">
            <div className="loginImgContainer">
                <h3>PLAYGROUND</h3>
                <img src="/img/login/image1.png" />
            </div>
            <div className="loginTxtContainer">
                <div className="loginTxtContainer__content">
                    <h4>Login</h4>
                    <p>Enter your email </p>
                    <input />
                    <button>SEND CODE</button>
                </div>

            </div>
            <p className="copyrigtht">&copy; 2022 Playground. All rights reserved.</p>
        </div>
    )
}
export default Login;