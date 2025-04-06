import React, { useState, useEffect, useRef } from 'react';

// WebSocket URL (на будущее, поменяй на настоящий URL WebSocket-сервера)
const WS_URL = "ws://localhost:8080"; 

function Chat({ chatType }) {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const ws = useRef(null);

  useEffect(() => {
    // Создаем WebSocket соединение
    ws.current = new WebSocket(WS_URL);

    // Обработка входящих сообщений
    ws.current.onmessage = (event) => {
      const incomingMessage = JSON.parse(event.data);
      setMessages((prevMessages) => [...prevMessages, incomingMessage]);
    };

    return () => {
      ws.current.close();
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        sender: "User", // Это отправитель, для теста можно на "User"
        text: message,
        timestamp: new Date().toISOString(),
      };

      ws.current.send(JSON.stringify(newMessage)); // Отправляем сообщение на сервер
      setMessages((prevMessages) => [...prevMessages, newMessage]); // Добавляем сообщение в локальное состояние
      setMessage(""); // Очищаем поле ввода
    }
  };

  return (
    <div className="chat-container">
      <h2>{chatType === 'investor' ? "Чат с инвестором" : "Чат с поставщиком услуги"}</h2>
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender === 'User' ? 'user-message' : 'bot-message'}`}>
            <p>{msg.text}</p>
            <span>{new Date(msg.timestamp).toLocaleTimeString()}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Введите сообщение..."
        />
        <button onClick={sendMessage}>Отправить</button>
      </div>
    </div>
  );
}

export default Chat;
