import React from 'react';
import offersData from './OffersData'; // Импортируем данные, я фиг знает как тут потом обращение будет к БД, надеюсь это легко переделать
import Card from "../Componets/Card.jsx"

function Offers() {
  return (
    <>
      {offersData.map(item => (
        <Card
          key={item.id}
          arrayData={item}
          cardName={"Предложения услуг"}
          cardText={"Цена:"}
        />
      ))}
    </>
  );
}

export default Offers;
