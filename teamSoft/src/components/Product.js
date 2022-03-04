import React from 'react';
import "../styles/Product.css";

import Hamburger from '../img/hamburger.png';

export default function Main(){

    return(
        <main className='background'>
            <div className="p-produto" >
                <img className='p-produto__img' src={Hamburger} alt="Hamburger" />
                <h1 className='p-produto__description'>Oferta Picanha Cheddar Bacon</h1>
                <p className='p-produto__description--two'>Hamúrger de picanha, molho de picanha, cebola crispy, bacon, 
                    queijo cheddar, molho cheddar e pão mix de gergilim
                </p>
                <div className='p-produto__precos'>
                    <p className='p-produto__value'>R$31,99</p>
                    <p className='p-produto__value--two'>R$34,95</p>
                </div>
            </div>
        </main>
    )
}