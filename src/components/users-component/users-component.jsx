import React from "react";



import { useSelector } from "react-redux";
import "./users-component.scss";
import BackgroundLetterAvatars from "./user.avatar";

const UsersComponent = () => {
 const users = useSelector((state) => state.user.currentUsers);

  return (
    <div className="users-section">
      <div className="user-section">
        {users.map((user) => {
          return (
            <div className="user-row" key={user.id}>
              <BackgroundLetterAvatars Uname={user.username.toUpperCase()} />
              <h6 className="chat-name">{user.username}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UsersComponent;
