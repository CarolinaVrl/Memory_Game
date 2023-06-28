import { useState } from 'react'
import cardData from './CardData'
import './App.css'

function App() {
 
  const cardList = cardData.sort(()=>Math.random() - 0.5);

  return (
    <>
    <h1>Juego de Memoria</h1>
    <div className='container'>
    {
      cardList.map(item=>(
        <div key={item.id}>
         <img src={item.icon} alt="" />
        </div>
      ))
    }
     

    </div>
    
    </>
  )
}

export default App
