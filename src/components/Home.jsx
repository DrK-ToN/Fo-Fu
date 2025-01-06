import React from 'react';
import Nuvem from '../img/nuvem_lilas.png'
import Bag from './Bag'
import Nome from '../img/nome.png'
import Doll from './Doll'

import './Home.css'

function Home() {

    return (
    <>
    <img src={Nuvem} className="nuvem" alt="nuvem" />
    <img src= {Nome} className="nome" alt="Nome" />
    <div className="Home">
        <main className="main-content">
        <Bag />
        <Doll />
        </main>
    </div>
    </>
)
}

export default Home