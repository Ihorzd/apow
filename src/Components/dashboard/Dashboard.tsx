import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux";
import { fetchLogout } from "../../store/redusers/ActionCreators";
import Menu from "../Menu/Menu";

import "./dashboar.scss";

const Dashboard: FC = () => {
  const navigation = useNavigate()
  const dispatch = useAppDispatch();
  const logOut = () =>{
    dispatch(fetchLogout);
    navigation('/')
  }
  return (
    <div className="dashboardContainer">
      <Menu />
      <div className="dashboard">
        <div className="comingSoon">
          <img className="comingSoon__img" src="img/login/image2.png" />
          <h3 className="comingSoon__txt">COOMING SOON</h3>
        </div>
        <div className="btnContainer">
          <Link to='/profile'>
          <button className="btnContainer__editProfile">
            <span>EDIT MY PROFILE AND MY WORKLOG</span>
          </button>
          </Link>
          
          <button className="btnContainer_logout"
          onClick={()=> logOut()}
          >LOGOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
