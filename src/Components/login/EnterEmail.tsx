import { FC } from "react";

interface Props{
    handleEmail:(e:string)=>void,
    postEmail:() => void
}

const EnterEmail = ({handleEmail, postEmail}:Props) => {
    return (
        <>
            <p>Enter your email </p>
            <input onChange={e=>handleEmail(e.target.value)}/>
            <button onClick={()=> postEmail()}>SEND CODE</button>
        </>
    )
}

export default EnterEmail;