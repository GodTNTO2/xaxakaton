import React from 'react';
import startupsData from './startupsData'; // Импортируем данные, я фиг знает как тут потом обращение будет к БД, надеюсь это легко переделать
import Card from "../Componets/Card.jsx"

function Startups() {
  return (
    <>
      {startupsData.map(item => (
        <Card
          key={item.id}
          arrayData={item}
          cardName={"Стартапы"}
          cardText={"Запрашиваемые инвестиции:"}
        />
      ))}
    </>
  );
}

export default Startups;
