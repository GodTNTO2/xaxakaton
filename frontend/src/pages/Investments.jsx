import React from 'react';
import investmentData from './InvestmentData'; // Импортируем данные
import './cards.css';
import defImage from './placeholder.png';

function Investments() {
  return (
    <div className="cards-page">
      <h2 className="cards-title">Инвесторы</h2>
      <div className="cards-grid">
        {investmentData.map(investor => (
          <div key={investor.id} className="cards-tile">
            <img
              src={investor.image || defImage} // Путь к изображению
              alt={investor.name}
              className="cards-image"
            />
            <div className="cards-info">
              <h3>{investor.name}</h3>
              <p>{investor.description}</p>
              <span className="investment">Предлагаемые инвестиции: {investor.investment}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Investments;
