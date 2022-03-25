import React from "react";
import BackgroundLetterAvatars from "../users-component/user.avatar.js";
import "./conversations.styles.scss";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom'

const ConversationsComponent = () => {
  const users = useSelector((state) => state.user.currentUsers);
  return (
    <div className="conversations_container">
      <div className="conversations-section">
        {users.map((user) => {
          return (
            <div className="conversation-row">
              <BackgroundLetterAvatars
                className="user-avatar"
                Uname={user.username.toUpperCase()}
              />
              <Link style={{color: 'black'}}  to={`/chat/conversations/${user.id}`}>
                <div className="conversation-textarea">
                  <div className="name-time">
                    <h6 className="chat-name">{user.username}</h6>
                    <span className="chat-time"> 2 hours ago</span>
                  </div>
                  <div className="message-icon">
                    <p className="user-message">Good Afternoon baby...</p>
                    <div className="user-message-icon">1</div>
                  </div>
                </div>
              </Link>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConversationsComponent;
