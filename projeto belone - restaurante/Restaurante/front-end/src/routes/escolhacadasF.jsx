import React from 'react';
import './escolhacadasF.css';
import logo from './imagens/Borcelle.png';


function TelaInicial2() {
 
  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Escolha a forma de cadastro:</h1>
      <a href={`/contacts/1`}><button className="btn1">Cliente</button></a>
      <a href={`/contacts/6`}><button className="btn2">Funcionario</button></a>
    </div>
  );
}


export default TelaInicial2;
