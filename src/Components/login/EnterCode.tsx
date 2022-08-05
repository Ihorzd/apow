import { ExclamationCircleOutlined } from "@ant-design/icons";
import { FC, useEffect, useState } from "react";
import OtpInput from "./OtpInput";
import './enterCode.scss'
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCode } from "../../store/redusers/ActionCreators";

const EnterCode: FC = () => {

    const dispatch = useAppDispatch();
    const {email} = useAppSelector(state => state.emailReduser)

    const [otp, setOtp] = useState('');
    const onChange = (value: string) => setOtp(value);
    
    const postCode = () => {
        const data={
            email: "demo@demo.com",
            code: "111111",
            languageID: "string"
        }
        console.log(otp)
        dispatch(fetchCode(data))
    }

    useEffect(() => {
        
    }, [otp])
    return (
        <>
        
            <div className="warningMessage">
                <ExclamationCircleOutlined style={{color:'#AF2727'}} className="exclamationMark" />
                <h5 className="warningMessage__text">Please enter a valid code</h5>
            </div>
            <p>To finalize your verification, please enter the code that
                has been sent to your email address / SMS</p>
            <OtpInput value={otp} valueLength={6} onChange={onChange} />
            <button onClick={()=> postCode()} >SEND CODE</button>
            <p>If you do not receive the confirmation message within a few
                minutes, please check your Spam or Junk E-Mail folder</p>

        </>
    )
}

export default EnterCode;