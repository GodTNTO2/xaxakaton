import React from 'react';
import { useParams } from "react-router-dom"

function Model({text ,arrayData}) {
    const params = useParams()
    const prodId = params.id


  return (
    <>
        <div>
            {arrayData?.[prodId-1].id}
            
            {arrayData[prodId-1].description}
        </div>
    </>
  )
}

export default Model