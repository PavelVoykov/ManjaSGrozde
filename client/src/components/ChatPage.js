import React, { useEffect, useState } from 'react';
import ChatFooter from './ChatFooter';

const ChatPage = ({socket}) => {
  useEffect(() => {
    socket.on('message2', (data) => {
      console.log(data);
    });
  });

  return (
    <div>
        <ChatFooter socket={socket} />
    </div>
  );
};

export default ChatPage;