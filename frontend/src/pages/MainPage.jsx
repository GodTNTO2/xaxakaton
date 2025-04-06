import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
  return (
    <div className="home-container">
      <div className="home-box">
        <h1 className="home-title">Платформа для стартапов и инвесторов</h1>
        <p className="home-subtitle">
          Объединяем идеи, инвестиции и возможности в одном месте. Размещай свои проекты, предлагай услуги или находи стартап для инвестиций.
        </p>

        <div className="home-buttons">
          <Link to="/upload" className="home-button">Разместить проект</Link>
          <Link to="/startups" className="home-button">Посмотреть стартапы</Link>
          <Link to="/investors" className="home-button">Инвесторы</Link>
          <Link to="/offers" className="home-button">Услуги</Link>
        </div>

        <div className="home-section">
          <h3>Что мы предлагаем?</h3>
          <p>
            Наша платформа предоставляет удобный способ представить себя или свой проект, получить финансирование, найти нужные ресурсы или стать частью инновационной экосистемы.
          </p>
        </div>

        <div className="home-section">
          <h3>Кому это подходит?</h3>
          <p>
            Стартапам, которые ищут инвестиции. Инвесторам, которые ищут перспективные проекты. Предпринимателям, которые готовы предложить услуги или производственные мощности.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
