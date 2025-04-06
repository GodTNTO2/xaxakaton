import React from 'react';
import Model from '../Componets/Model.jsx'
import startupsData from './startupsData'; 

function Startup() {
 
  return (
    <>
      <Model 
        arrayData={startupsData}
      />
    </>
  )
}

export default Startup