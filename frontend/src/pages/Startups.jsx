import React from 'react';
import startupsData from './startupsData'; // Импортируем данные, я фиг знает как тут потом обращение будет к БД, надеюсь это легко переделать
import './cards.css';
import defImage from './placeholder.png';

function Startups() {
  return (
    <div className="cards-page">
      <h2 className="cards-title">Стартапы</h2>
      <div className="cards-grid">
        {startupsData.map(startup => (
          <div key={startup.id} className="cards-tile">
            <img
              src={startup.image || defImage}
              alt={startup.name}
              className="cards-image"
            />
            <div className="cards-info">
              <h3>{startup.name}</h3>
              <p>{startup.description}</p>
              <span className="investment">Запрашиваемые инвестиции: {startup.investment}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Startups;
