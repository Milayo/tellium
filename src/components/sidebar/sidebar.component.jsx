import React from "react";
import { useHistory} from "react-router-dom";
import { auth } from "../../firebase/firebase.utils.js";
import { signOut } from "firebase/auth";
import DuoRoundedIcon from "@material-ui/icons/DuoRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import SettingsIcon from "@material-ui/icons/Settings";
import ChatIcon from "@material-ui/icons/Chat";

import "./sidebar.styles.scss";



const SideBar = () => {
  let history = useHistory();
  const SignOut = () => {
    signOut(auth)
      .then(() => {
        console.log('signed out')
         history.push("/");
      })
      .catch((error) => {
       console.log(error)
      });
    
  };
  return (
    <div className="sidebar">
      <DuoRoundedIcon className="sidebar-icon" />
      <div className="sidebar-menu">
        {" "}
        <ChatIcon className="menu" />
        <SettingsIcon className="menu" />
        <ExitToAppRoundedIcon className="menu" onClick={SignOut} />
      </div>
      <NightsStayIcon className="menu4" />
    </div>
  );
};

export default SideBar;
