import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MessagingHeader from '../messaging-header/messaging-header';

const MessagingComponent = (props) => {
    const [messages, setMessages] = useState([]);
    const users = useSelector((state) => state.user.currentUsers);
    const id = props.match.params.id;
    
    return (
        <div>

            <h1>
                
            </h1>
            <MessagingHeader />
        </div>
    )
}

export default MessagingComponent;
