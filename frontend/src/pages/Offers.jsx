import React from 'react';
import offersData from './OffersData'; // Импортируем данные
import './cards.css';
import defImage from './placeholder.png';

function Offers() {
  return (
    <div className="cards-page">
      <h2 className="cards-title">Предложения услуг</h2>
      <div className="cards-grid">
        {offersData.map(offer => (
          <div key={offer.id} className="cards-tile">
            <img
              src={offer.image || defImage} // Путь к изображению
              alt={offer.name}
              className="cards-image"
            />
            <div className="cards-info">
              <h3>{offer.name}</h3>
              <p>{offer.description}</p>
              <span className="price">Цена: {offer.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Offers;
