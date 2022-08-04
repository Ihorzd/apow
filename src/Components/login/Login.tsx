import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import EnterCode from "./EnterCode";
import EnterEmail from "./EnterEmail";

import { userSlice } from "../../store/redusers/UserSlice";
import './login.scss'
import { fetchUsers } from "../../store/redusers/ActionCreators";

const Login: FC = () => {
    const dispatch = useAppDispatch();
    const {users} = useAppSelector(state => state.userReduser)
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    return (
        <div className="login">
            <div className="loginImgContainer">
                <h3>PLAYGROUND</h3>
                <img src="/img/login/image1.png" />
            </div>
            <div className="loginTxtContainer">
                <div className="loginTxtContainer__content">
                    <h4>Login</h4>
                    {users.map((user)=>{
                        return(
                            <p key={user.id}>{user.id}</p>
                        )
                    })}
                    <EnterCode/>
                    <button >SEND CODE</button>
                </div>

            </div>
            <p className="copyrigtht">&copy; 2022 Playground. All rights reserved.</p>
        </div>
    )
}
export default Login;