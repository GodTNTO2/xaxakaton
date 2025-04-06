import React from 'react';
import investmentData from './InvestmentData'; // Импортируем данные, я фиг знает как тут потом обращение будет к БД, надеюсь это легко переделать
import Card from "../Componets/Card.jsx"
import "./MainCards.css"

function Investments() {
  return (
    <>
      <div className='cards-pages'>
        <h1>
          Инвесторы
        </h1>
        <div className='cards'>
          {investmentData.map(item => (
            <Card
              key={item.id}
              arrayData={item}
              cardName={'/investments/'}
              cardText={"Предлагаемые инвестиции:"}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Investments;
