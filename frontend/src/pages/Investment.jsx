import React from 'react';
import Model from '../Componets/Model.jsx'
import investmentData from './InvestmentData'; // Импортируем данные, я фиг знает как тут потом обращение будет к БД, надеюсь это легко переделать


function Investment() {
 
  return (
    <>
      <Model  
        arrayData={investmentData} type = "investor"
      />
    </>
  )
}

export default Investment