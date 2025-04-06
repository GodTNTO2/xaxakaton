import React, {useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./NavBar.css"
import {addJwtToken, decoderJwtToken} from "../Redux/jwtTokenSlicer.js"

const getClassName = ({ isActive }) => (isActive ? 'active' : 'static');

function NavBar() {
  const { jwtToken, decodeJwt } = useSelector(state => state.jwtToken)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem("token"))
    if (token) {
        dispatch(addJwtToken(token))
    }
  }, [])

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
            <input type="checkbox"/>
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li>
                  <NavLink
                  className={getClassName}
                  to="/chats/:userId"
                  >
                  Чаты
                  </NavLink>
                </li>
                {!decodeJwt[0] && <li>
                  <NavLink
                  className="auth"
                  to='/auth'
                  >
                  Авторизация
                  </NavLink>
                </li>}
                {decodeJwt[0] && <li>
                  <NavLink
                  className="auth"
                  to='/user/1'
                  >
                  Профиль
                  </NavLink>
                </li>}
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
            <h1 className="logo">
              <div className='navBar-logo'>
                <h1 className='navBar-rocket'>🚀</h1>
                <h2 className='navBar-text'><NavLink className={"navBar-linl-text static"} to={'/'}>Агентство инноваций</NavLink></h2>
              </div> 
            </h1>
        </div>
    </nav>
    </>
  )
}

export default NavBar