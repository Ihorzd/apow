import { FC } from "react"
import Menu from "../Menu/Menu"

import './profile.scss'
const Profile:FC = () => {
    return(
        <div className='profileContainer'>
            <Menu/>
            <div className='profile'></div>
        </div>
    )
   
}

export default Profile