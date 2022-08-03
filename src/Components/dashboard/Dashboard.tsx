import { FC } from "react";
import Menu from "../Menu/Menu";

import "./dashboar.scss";

const Dashboard: FC = () => {
  return (
    <div className="dashboardContainer">
      <Menu />
      <div className="dashboard">
        <div className="comingSoon">
          <img className="comingSoon__img" src="img/login/image2.png" />
          <h3 className="comingSoon__txt">COOMING SOON</h3>
        </div>
        <div className="btnContainer">
          <button className="btnContainer__editProfile">
            <span>EDIT MY PROFILE AND MY WORKLOG</span>
          </button>
          <button className="btnContainer_logout">LOGOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
