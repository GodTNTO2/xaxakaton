import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreed) return;
    console.log('Регистрация:', { email, password, inviteCode },
    navigate('/startups')
    );
  };
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
    <div className="register-page">
      <div className="register-container">
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmit}>
          <div className="register-field">
            <label>Электронная почта</label>
            <input
              type="email"
              placeholder="example@mail.ru"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="register-field">
            <label>Пароль</label>
            <input
              type="password"
              placeholder="Придумайте надежный пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="register-field">
            <label>Инвайт-код</label>
            <input
              type="text"
              placeholder="Введите ваш инвайт-код (пока как задумка)"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
            />
          </div>
          <div className="register-checkbox">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              id="agree"
              required
            />
            <label htmlFor="agree">
              Я согласен с политикой обработки персональных данных
            </label>
          </div>
          <button type="submit" disabled={!agreed}>
            Зарегистрироваться
          </button>
        </form>
        <p>Уже есть аккаунт? <a href="/auth">Войти</a></p>
      </div>
    </div>
  );
}

export default Register;
