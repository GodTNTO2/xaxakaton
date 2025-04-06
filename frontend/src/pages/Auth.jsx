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
  
  const loginUser = async (password, email) => {
  const response = await fetch("http://localhost:8000/api/v1/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/JSON",
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      password: password,
      email: email
    })
    })
    const data = await response.json();
    console.log(data)
    if (data.data) {
      await window.localStorage.setItem('token', JSON.stringify(data.detail)) 
      await dispatch(addJwtToken(data.detail))
    }}

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      loginUser(password, email)
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
