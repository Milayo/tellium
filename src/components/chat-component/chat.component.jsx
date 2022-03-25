import React from "react";
import { Route } from "react-router-dom";

import ConversationsComponent from "../conversations-component/conversations-component";
import UsersComponent from "../users-component/users-component";
import HeaderChatComponent from "../header-chat-component/header-chat-component";
import SideBar from "../sidebar/sidebar.component";
import "./chat.styles.scss";
import MessagingComponent from "../messaging-component/messaging-component";

const ChatComponent = (props) => {
  return (
    <div className="chatcomponent-page">
      <SideBar />
      <div className="chats-section">
        <HeaderChatComponent />
        <Route exact path="/chat/allusers" component={UsersComponent} />
        <Route exact path="/chat" component={ConversationsComponent} />
      </div>
      <div>
        <Route
          exact
          path="/chat/conversations/:id"
          component={MessagingComponent}
        />
      </div>
    </div>
  );
};

export default ChatComponent;
