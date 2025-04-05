import React from 'react';
import { NavLink } from "react-router-dom";
import "./NavBar.css"

const getClassName = ({ isActive }) => (isActive ? 'active' : 'static');

function NavBar() {
 
  return (
    <>
      <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li>
                  <NavLink
                  className={getClassName}
                  to="/chats/:userId"
                  >
                  Чаты
                  </NavLink>
                </li>
                <li>
                  <NavLink
                  className="auth"
                  to='/auth'
                  >
                  Авторизация
                  </NavLink>
                </li>
                <li>
                  <NavLink
                  className={getClassName}
                  to="/startups"
                  >
                  Стартапы
                  </NavLink>
                </li>
                <li>
                  <NavLink
                  className={getClassName}
                  to="/offers"
                  >
                  Услуги
                  </NavLink>
                </li>
                <li>
                  <NavLink
                  className={getClassName}
                  to="/investments"
                  >
                  Инвесторы
                  </NavLink>
                </li>
                <li>
                  <NavLink
                  className={getClassName}
                  to="/upload"
                  >
                  Разместить
                  </NavLink>
                </li>
            </ul>
            <h1 class="logo">
              <div className='navBar-logo'>
                <h1 className='navBar-rocket'>🚀</h1>
                <h2 className='navBar-text'>Агентство инноваций</h2>
              </div> 
            </h1>
        </div>
    </nav>
    </>
  )
}

export default NavBar