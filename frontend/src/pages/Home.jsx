import React from 'react';
import { useParams } from "react-router-dom"
import investmentData from './InvestmentData';

function Home() {
  const params = useParams()
  const userId = params.id



  return (
    <>
      <div>
        <div>
          {investmentData[userId].id}
        </div>
        <div>
          {investmentData[userId].name}
        </div>
      </div>
    </>
  )
}

export default Home