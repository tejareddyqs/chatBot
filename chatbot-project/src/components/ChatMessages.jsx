import React, { useRef, useEffect } from 'react';
import {ChatMessage} from './ChatMessage.jsx';
  export function ChatMessages({chatMessages}){
        const chatMessagesRef = useRef(null);

        useEffect(()=>{
          const containerElem = chatMessagesRef.current;
          if(containerElem){
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        })
        return(
          <div className="chat-messages-container" ref={chatMessagesRef}>
            {chatMessages.map((chatMessa)=>{
              return(
                <ChatMessage 
                  message={chatMessa.message}
                  sender={chatMessa.sender}
                  key={chatMessa.id}
                />
              );
            })}
          </div>
        );
      }
export default ChatMessages;
