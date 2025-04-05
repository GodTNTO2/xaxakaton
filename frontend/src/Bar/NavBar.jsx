import React from 'react';
import { NavLink } from "react-router-dom";

const getClassName = ({ isActive }) => (isActive ? 'active' : 'static');

function NavBar() {
 
  return (
    <>
      <div>
        <div id='logo'>
          <h1>🚀</h1>
          <h2>Агентство инноваций</h2>
        </div> 
        <div id='center'>
          <NavLink
              className={getClassName}
              to="/chats/:userId"
          >
          Чаты
          </NavLink>
          <NavLink
              className={getClassName}
              to="/startups"
          >
          Стартапы
          </NavLink>
          <NavLink
              className={getClassName}
              to="/offers"
          >
          Услуги
          </NavLink>
          <NavLink
              className={getClassName}
              to="/investments"
          >
          Инвесторы
          </NavLink>
          <NavLink
              className={getClassName}
              to="/upload"
          >
          Разместить
          </NavLink>
        </div>
        <div id='right'>

        </div>
      </div>
    </>
  )
}

export default NavBar