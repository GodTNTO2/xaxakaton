import React from 'react';
import './cards.css';
import defImage from '../assets/placeholder.png';

function Card({arrayData, cardName, cardText}) {

  return (
    <>
      <div className="cards-page">
            <div className="cards-grid">
                <div key={arrayData.id} className="cards-tile">
                  <img
                    src={arrayData.image || defImage}
                    alt={arrayData.name}
                    className="cards-image"
                  />
                  <div className="cards-info">
                    <h3>{arrayData.name}</h3>
                    <p>{arrayData.description}</p>
                    <span className="investment">{cardText}{arrayData.investment}</span>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card