import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import investmentData from './InvestmentData';
import './Home.css';

function Home() {
  const params = useParams();
  const userId = params.id;
  
  const user = investmentData[userId];
  const [emailNotifications, setEmailNotifications] = useState(false);
  const [telegramNotifications, setTelegramNotifications] = useState(false);
  const [email, setEmail] = useState(user.email || "");
  const [telegramConnected, setTelegramConnected] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailCheckboxChange = () => {
    setEmailNotifications(!emailNotifications);
  };

  const handleTelegramCheckboxChange = () => {
    setTelegramNotifications(!telegramNotifications);
  };

  const handleConnectTelegram = () => {
    // Здесь можно добавить функционал для подключения Telegram
    setTelegramConnected(true);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      
      <div className="profile-details">
        <h3>Настройки уведомлений</h3>

        <div className="notification-option">
          <label>
            <input 
              type="checkbox" 
              checked={emailNotifications} 
              onChange={handleEmailCheckboxChange} 
            />
            Дублировать уведомления на электронную почту
          </label>
          {emailNotifications && (
            <input 
              type="email" 
              value={email} 
              onChange={handleEmailChange} 
              placeholder="Введите почту для уведомлений" 
              className="email-input"
            />
          )}
        </div>

        <div className="notification-option">
          <label>
            <input 
              type="checkbox" 
              checked={telegramNotifications} 
              onChange={handleTelegramCheckboxChange} 
            />
            Дублировать уведомления в Telegram
          </label>
          {telegramNotifications && !telegramConnected && (
            <button className="connect-button" onClick={handleConnectTelegram}>
              Подключить Telegram
            </button>
          )}
          {telegramConnected && (
            <p className="connected-status">Telegram подключен</p>
          )}
        </div>
      </div>
      
      <div className="profile-footer">
        <button className="save-button">Сохранить изменения</button>
      </div>
    </div>
  );
}

export default Home;
