import React from 'react';
import {GetTheUsers} from '../../utils/user'
import ChatComponent from '../../components/chat-component/chat.component';
import ProfileComponent from '../../components/profile/profile.component';
import "./chatpage.scss";


const ChatPage = () => {
    GetTheUsers()
    return (
        <div className="chatpage">
            <ChatComponent />
            <ProfileComponent />
     </div>
    );
}

export default ChatPage;
