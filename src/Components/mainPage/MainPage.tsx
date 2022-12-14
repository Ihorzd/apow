import { FC } from "react";
import Dashboard from "../dashboard/Dashboard";
import Menu from "../Menu/Menu";
import './mainPage.scss'

const MainPage: FC = () => {
    return (
        <div className="mainPage">
            <Menu/>
            <Dashboard/>
        </div>
    )
}
export default MainPage;