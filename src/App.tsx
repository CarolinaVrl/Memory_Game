import { useState } from 'react'
import cardData from './CardData'
import './App.css'

function App() {
 
  const cardList = cardData.sort(()=>Math.random() - 0.5);

  return (
    <>
    {
      cardData.map(item=>(
        <div key={item.id}>
          <i className={item.icon}></i>
        </div>
      ))
    }
     
    </>
  )
}

export default App
