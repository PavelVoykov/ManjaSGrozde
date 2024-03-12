import React from 'react';
import ChatFooter from './RegisterForm';

const ChatPage = ({socket}) => {

  return (
    <div>
        <ChatFooter socket={socket} />
    </div>
  );
};

export default ChatPage;