import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
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
