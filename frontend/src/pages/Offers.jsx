import React from 'react';
import offersData from './OffersData'; // Импортируем данные, я фиг знает как тут потом обращение будет к БД, надеюсь это легко переделать
import Card from "../Componets/Card.jsx"
import "./MainCards.css"

function Offers() {
  return (
    <>
      <div className='cards-pages'>
        <h1>
          Предложения услуг
        </h1>
        <div className='cards'>
          {offersData.map(item => (
            <Card
              key={item.id}
              arrayData={item}
              cardName={"/offers/"}
              cardText={"Цена:"}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Offers;
