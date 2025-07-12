import { useState } from 'react'
import {ChatInput} from './components/ChatInput.jsx'
import ChatMessages from './components/ChatMessages'
import './App.css' 
function App(){
          const [chatMessages,setChatMessages] = useState([
          {message:'hello chatbot', sender:'user', id: 'id1'},
          {message:'hello! how can i help you', sender:'robot', id: 'id2'},
          {message:'can you get me today date', sender:'user', id: 'id3'},
          {message:'today is july 8th', sender:'robot', id: 'id4'}
        ]);
       // const [chatMessages,setChatMessages]= array;
      //  const chatMessages = array[0];
       //  const setChatMessages = array[1];
        
        return(
          <div className="app-container">
            <ChatInput chatMessages={chatMessages}
            setChatMessages={setChatMessages}
            />
            <ChatMessages 
            chatMessages={chatMessages}/>
          </div>
        );
      }

export default App
