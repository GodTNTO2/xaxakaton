import React from 'react';
import Model from '../Componets/Model.jsx'
import OffersData from './OffersData'; // Импортируем данные, я фиг знает как тут потом обращение будет к БД, надеюсь это легко переделать


function Offer() {
 
  return (
    <>
      <Model 
        arrayData={OffersData}
      />
    </>
  )
}

export default Offer