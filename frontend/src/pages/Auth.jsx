import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import { useDispatch, useSelector } from "react-redux";
import {addJwtToken} from "../Redux/jwtTokenSlicer.js"


function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { jwtToken } = useSelector(state => state.jwtToken)
  const dispatch = useDispatch()
  
  const loginUser = async (user) => {
  const response = await fetch("/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/JSON"
    },
    body: JSON.stringify(user)
  })
  const data = await response.json();
  if (data.user) {
    await window.localStorage.setItem('token', JSON.stringify(data.token)) 
    await dispatch(addJwtToken(data.token))
  }}

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      loginUser(email)
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
            type="email"
            placeholder="Почта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <p>Нет аккаунта? <a href="/register">Создать!</a></p>
      </div>
    </div>
  );
}

export default Auth;
