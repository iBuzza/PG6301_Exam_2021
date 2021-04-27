import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';


export function ChatPage() {
  const [chatLog, setChatLog] = useState([]);
  const [message, setMessage] = useState("");
  const [ws, setWs] = useState();
  
  useEffect(() => {
    const ws = new WebSocket('ws://' + window.location.host);
  ws.onopen = event => {
    console.log('opened', event);
  }

  ws.onmessage = event => {
    console.log('message', event);
  }

  ws.onclose = event => {
    console.log('closed', event); 
  }
  setWs(ws);
  
  }, [])

  function handleSubmitMessage(e) {
    e.preventDefault();
    setChatLog([...chatLog, message]);
    ws.send(message);
    setMessage("");
  }


  return <>
  <header><h1>Chat Page</h1></header>

  <main>
    <div id="chatLog">
    {chatLog.map((message, index) => (
    <div key={index}>{message}</div>
    ))}
    </div>
  </main>
  <footer> 
    <form onSubmit={handleSubmitMessage}>
    <input type="text" autoFocus={true} value={message} onChange={e => setMessage(e.target.value)}/>
    <button>Submit</button>
    </form>
  </footer>
  </>
}