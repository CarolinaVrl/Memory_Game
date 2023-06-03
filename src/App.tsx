import { useState } from 'react'
import cardData from './CardData'
import './App.css'

function App() {
 

  return (
    <>
    {
      cardData.map(item=>(
        <div>
          <i className={item.icon}></i>
        </div>
      ))
    }
     
    </>
  )
}

export default App
