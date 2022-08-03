import { FC } from "react";
import { Link } from "react-router-dom";

import './menu.scss'
const Menu: FC = () => {
    return (
        <div className="menu">
            <div className="menuItems">
                <Link to='/'> <img src="/img/menu/menu_24px.png" /></Link>
                <Link to='/profile'><img src="/img/menu/Patient_24px.png" /></Link>
                <Link to='/dashboard'><img src="/img/menu/Schedule_24px.png" /></Link>
               
            </div>

        </div>
    )
}

export default Menu;