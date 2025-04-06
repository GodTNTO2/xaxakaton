import React, { useState } from 'react';
import './Chats.css';
import { useSelector } from "react-redux";

function Chats() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { decodeJwt } = useSelector(state => state.jwtToken)
  
  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, { text: message, sender: "You" }]);
      setMessage("");
    }
  };
  
  console.log(decodeJwt[0])

  if (!decodeJwt[0]){return (
    <div>
      Похоже вы не авторизованы!
    </div>
  )}
  
  if (decodeJwt[0]) {
    return (
      <div className="chat-container">
        <div className="chat-sidebar">
          <div className="chat-header">
            <h3>Чаты</h3>
          </div>
          <div className="chat-sections">
            <div className="chat-section">Инвесторы</div>
            <div className="chat-section">Предоставляющие услуги</div>
            <div className="chat-section">Общие чаты</div>
          </div>
        </div>

        <div className="chat-window">
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender === "You" ? "outgoing" : "incoming"}`}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          
          <div className="message-input">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Напишите сообщение..."
            />
            <div className="attachments">
              <button className="attachment-button">📎</button>
            </div>
            <button className="send-button" onClick={handleSendMessage}>Отправить</button>
          </div>
        </div>
      </div>
    );
  }}


export default Chats;
