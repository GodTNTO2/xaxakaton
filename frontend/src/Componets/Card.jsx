import React from 'react';
import './cards.css';
import defImage from '../assets/placeholder.png';
import { useNavigate } from 'react-router-dom';

function Card({arrayData, cardName, cardText}) {
  const navigate = useNavigate()
  const pushOnClik = () => {
      navigate(cardName + arrayData.id)
  }


  return (
    <>
      <div className="cards-page fade-in">
            <div onClick={pushOnClik} className="cards-grid ">
                <div key={arrayData.id} className="cards-tile fade-in">
                  <img
                    src={arrayData.image || defImage}
                    alt={arrayData.name}
                    className="cards-image"
                  />
                  <div className="cards-info">
                    <h3>{arrayData.name}</h3>
                    <p>{arrayData.description}</p>
                    <span className="investment">{cardText}{arrayData.investment}</span>
                    <p>{arrayData.interests}</p>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card