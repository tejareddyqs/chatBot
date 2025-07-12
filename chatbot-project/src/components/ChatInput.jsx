import { useState} from 'react'
import {Chatbot} from 'supersimpledev';
import'./ChatInput.css'
export function ChatInput({chatMessages,setChatMessages}){
        const[inputText,setInputText]=useState('');
        function saveInputText(event){
          setInputText(event.target.value);
        }
        function sendMessage(){
          const newChatMessages =   [
              ...chatMessages,
              {
                message: inputText,
                sender:'user',
                id: crypto.randomUUID()
              }
            ]
           setChatMessages(newChatMessages);
          const response = Chatbot.getResponse(inputText);
          setChatMessages(
            [
              ...newChatMessages,
              {
                message: response,
                sender:'robot',
                id: crypto.randomUUID()
              }
            ])
          setInputText('');
        }
         return(
         <div className="chat-input-container"> 
          <input
            placeholder="send a message to chatbot"
            size ="25"
            onChange={saveInputText}
            value={inputText}
            className="chat-input"
            />
          <button onClick={sendMessage} className="send-button">send</button>
          </div>
         );
      }