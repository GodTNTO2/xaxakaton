import React from 'react';
import startupsData from './startupsData'; // Импортируем данные, я фиг знает как тут потом обращение будет к БД, надеюсь это легко переделать
import Card from "../Componets/Card.jsx"
import "./MainCards.css"

function Startups() {
  return (
    <>
      <div className='cards-pages'>
        <h1>
          Стартапы
        </h1>
        <div className='cards'>
          {startupsData.map(item => (
            <Card
              key={item.id}
              arrayData={item}
              cardName={"/startups/"}
              cardText={"Запрашиваемые инвестиции:"}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Startups;
