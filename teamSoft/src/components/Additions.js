import React from 'react';
import Add from '../img/add.png';
import Subtract from '../img/subtract.png'
import A from '../img/hamburger.png'
import "../styles/Additions.css";

function activateLasers() {
    alert('Cliquei Aqui')
}

export default function Additions() {
    return (
        <main className='background-adicionais'>
            <div className="p-produto__adicionais">
                <div className="p-produto__opcoes p-produto__opcoes--scroll">
                    <div className="p-produto__detalhes">
                        <p className="p-produto__detalhesTitulo">
                            Adicionar Ingredientes
                        </p>
                        <p className="p-produto__detalhesDescricao">
                            Até 8 ingredientes
                        </p>
                    </div>
                    <div className='p-produto__datelhesAdicionais'>
                        <div className='p-produto__datelhesAdicionais--one'>
                            <p className="p-produto__detalhesAdicionaisNome">
                                Queijo Cheddar
                            </p>
                            <p className="p-produto__detalhesAdicionaisValor">
                                + R$4,99
                            </p>
                            <div className="p-produto__detalhesAdicionaisContador">
                                <img src={Subtract} alt='Menos'></img>
                                <p id='teste'>2</p>
                                <img src={Add} alt='Mais'></img>
                            </div>
                        </div>
                        <div className='p-produto__datelhesAdicionais--two'>
                            <p className="p-produto__detalhesAdicionaisNome">
                                Cebola Crispy
                            </p>
                            <p className="p-produto__detalhesAdicionaisValor">
                                + R$1,50
                            </p>
                            <div className="p-produto__detalhesAdicionaisContador">
                                <img src={Subtract} alt='Menos'></img>
                                <p>0</p>
                                <img src={Add} alt='Mais'></img>
                            </div>
                        </div>
                        <div className='p-produto__datelhesAdicionais--three'>
                            <p className="p-produto__detalhesAdicionaisNome">
                                Molho Cheddar
                            </p>
                            <p className="p-produto__detalhesAdicionaisValor">
                                + R$3,50
                            </p>
                            <div className="p-produto__detalhesAdicionaisContador">
                                <img src={Subtract} alt='Menos'></img>
                                <p>0</p>
                                <img src={Add} alt='Mais'></img>
                            </div>
                        </div>
                        <div className='p-produto__datelhesAdicionais--four'>
                            <p className="p-produto__detalhesAdicionaisNome">
                                Molho de Picanha
                            </p>
                            <p className="p-produto__detalhesAdicionaisValor">
                                + R$3,50
                            </p>
                            <div className="p-produto__detalhesAdicionaisContador">
                                <img src={Subtract} alt='Menos'></img>
                                <p>1</p>
                                <img src={Add} alt='Mais'></img>
                            </div>
                        </div>
                    </div>
                    <div className="p-produto__detalhes">
                        <p className="p-produto__detalhesTitulo">
                            Precisa Talher?
                        </p>
                    </div>
                    <div className="p-produto__talherCheck">
                        <div className="p-produto__talherSim">
                            <p>Sim</p>
                            <label className="p-produto__check">
                                <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                <span className="p-produto__mark"></span>
                            </label>
                        </div>
                        <div className="p-produto__talherNao">
                            <p>Não</p>
                            <label className="p-produto__check" >
                                <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
                                <span className="p-produto__mark"></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="p-produto__confirmacao">
                    <div className="p-produto__confirmacaoContador">
                        <img src={Subtract} alt='Menos'></img>
                        <p>1</p>
                        <img src={Add} alt='Mais'></img>
                    </div>
                    <button className="p-produto__button" onClick={activateLasers}>
                        <p>
                            Adicionar
                        </p>
                    </button>
                </div>
            </div>
        </main>
    )
}