import React from 'react';
import './escolhacadasF.css';
import logo from './imagens/Borcelle.png';


function TelaInicial3() {
 
  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Escolha o Login que deseja realizar:</h1>
      <a href={`/contacts/7`}><button className="btn1">Cliente</button></a>
      <a href={`/contacts/3`}><button className="btn2">Funcionario</button></a>
    </div>
  );
}


export default TelaInicial3;
