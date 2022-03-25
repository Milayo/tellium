import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import "./header-chat-component.scss";
import { useHistory } from "react-router";

const HeaderChatComponent = (props) => {
  const history = useHistory()
  const { pathname } = history.location;
  console.log(pathname)
  return (
    <div>
      <div className="chats-subheading">
        <h6>Messages</h6>
        <div className="message-icon">10</div>
        <SearchRoundedIcon className="search-icon" />
      </div>
      <div className="subheading-tabs">
        <Link
          to='/chat'
          className={`subheading-tab ${pathname === "/chat" ? "active" : ""}`}
        
        >
          All Conversations
        </Link>
        <Link
          to="/chat/allusers"
          className={`mx-2 subheading-tab ${pathname !== "/chat" ? "active" : ""}`}
        
        >
          Available Users
        </Link>
      </div>
    </div>
  );
};

export default HeaderChatComponent;
