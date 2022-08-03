import { FC } from "react";

import './menu.scss'
const Menu: FC = () => {
    return (
        <div className="menu">
            <div className="menuItems">
                <img src="/img/menu/menu_24px.png" />
                <img src="/img/menu/Patient_24px.png" />
                <img src="/img/menu/Schedule_24px.png" />
            </div>

        </div>
    )
}

export default Menu;