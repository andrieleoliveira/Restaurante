import React from 'react';
import './escolha.css';
import logo from './imagens/Borcelle.png';


function TelaInicial() {
  
  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Bem Vindo</h1>
      <a href={`/contacts/4`}><button className="btn1">Cadastrar-me</button></a>
      <a href={`/contacts/8`}><button className="btn2">Login</button></a>
    </div>
  );
}


export default TelaInicial;
