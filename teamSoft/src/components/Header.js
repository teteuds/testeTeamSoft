import React from 'react';
import "../styles/Header.css";

import LogoBox from '../img/logoBox.png';
import LogoName from '../img/logoName.png';
import Account from '../img/account.png';
import Cart from '../img/cart.png';
import Arrow from '../img/arrowDown.png';

export default function Header(){

    function insereInput() {
        if ( document.getElementById('botao').innerHTML === '' ) {
          // modificar texto do botão:
          document.getElementById('botao').innerHTML = 'Rua A';
          // ou se usares <input type="button"> em vez do elemento <button> simplesmente muda innerHTML para value
        } else {
          // modificar texto do botão de volta para o padrão:
          document.getElementById('botao').innerHTML = 'Rua B';
        }
      }

    return(
        <header className='c-header'>

            <div className="c-header__logoArea">
                <img className="c-header__logo--One" src={LogoBox} alt="logoBox" />
                <img className="c-header__logo--Two" src={LogoName} alt="logoName" />
            </div>

            <div className='c-header__address'>
                <p className='c-header__address--text'>Endereço:</p>
                {/*<input className='c-header__address--input' type="text"placeholder='Escolha o Endereço'/>*/}
                <select className='c-header__address--input' placeholder='Escolha o Endereço'>
                    <option className='c-header__address--input-option'>R. Antônio Braune, 222</option>
                    <option className='c-header__address--input-option'>R. Antônio Braune, 273</option>
                </select>
               {/* <img className='c-header__address--arrow' src={Arrow} alt="arroDown" />*/}
            </div>

            <div className='c-header__search'>
                <input className='c-header__search--input' type="text"placeholder='Busque por estabelecimento ou produtos'/>
            </div>
            
            <div className="c-header__account">
                <img src={Account} alt="account" />
                <p className="c-header__account--text">Entrar</p>
            </div>


            <div className="c-header__cart">
                <img src={Cart} alt="cart" />
                <p className="c-header__cart--text">Carrinho</p>
            </div>

        </header>
    )
}