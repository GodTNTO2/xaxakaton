import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Auth() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Здесь должна быть авторизация (API, проверка и т.п.)
    if (login && password) {
      // Пример: переход к главной странице после логина
      navigate('/startups');
    } else {
      alert('Введите логин и пароль');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Вход в Агентство инноваций</h2>
        <form onSubmit={handleLogin}>
          <input
            type="login"
            placeholder="Логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
