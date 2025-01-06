import { useState } from 'react'
import nome from './img/nome.png'
import doll from './img/doll.png'
import bag from './img/bag.png'
import nuvem from './img/nuvem_lilas.png'

import './App.css'

function App() {

  return (
    <>
      <img src={nuvem} className="nuvem" alt="nuvem" />
    <div>
      <div className="container">
        <div>
          <img src={bag} className="bag react" alt="bag" />
        </div>
        <div>
          <img src={nome} className="nome" alt="Nome" />
          </div>
          <div>
          <img src={doll} className="doll react" alt="doll" />
          </div>
      </div>
    </div>
    </>
  )
}

export default App
