import { Link } from 'react-router-dom';
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { decoderJwtToken} from "../Redux/jwtTokenSlicer.js"
import "./footer.css"

function Footer() {
  const { jwtToken } = useSelector(state => state.jwtToken)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(decoderJwtToken())
  }, [jwtToken])

  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/about">О нас</Link>
        <Link to="/terms">Пользовательское соглашение</Link>
        <Link to="/privacy">Политика конфиденциальности</Link>
        <Link to="/cookies">Политика использования cookies</Link>
      </div>
      <p>© {new Date().getFullYear()} Агентство инноваций</p>
    </footer>
  );
}

export default Footer;
