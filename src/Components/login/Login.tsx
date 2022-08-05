import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import EnterCode from "./EnterCode";
import EnterEmail from "./EnterEmail";

import { userSlice } from "../../store/redusers/UserSlice";
import './login.scss'
import { fetchUsers, fetchEmail  } from "../../store/redusers/ActionCreators";

const Login: FC = () => {
    const [email,setEmail] = useState('')
 
    const dispatch = useAppDispatch();
    const {users} = useAppSelector(state => state.userReduser)
    const {isAuthorizeEmail} = useAppSelector(state => state.emailReduser)
    
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
  
    const postEmail = () => {
        dispatch(fetchEmail(email));
        console.log(email)
        console.log(isAuthorizeEmail);
        
    }
    const handleEmail= (event:string) => {
        setEmail(event)
    }
    return (
        <div className="login">
            <div className="loginImgContainer">
                <h3>PLAYGROUND</h3>
                <img src="/img/login/image1.png" />
            </div>
            <div className="loginTxtContainer">
                <div className="loginTxtContainer__content">
                    <h4>Login</h4>
                    {isAuthorizeEmail? 
                    <EnterCode/>:
                    <EnterEmail handleEmail={handleEmail} postEmail={postEmail}/>}
                    
                    
                </div>

            </div>
            <p className="copyrigtht">&copy; 2022 Playground. All rights reserved.</p>
        </div>
    )
}
export default Login;