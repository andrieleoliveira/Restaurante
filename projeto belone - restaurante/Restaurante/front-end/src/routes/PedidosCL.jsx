import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Pedidos.css';

// Define o componente funcional Pedidos
const Pedidos = () => {
  const [data, setData] = useState([]);

  // Função p/ renderizar os pedidos
  function renderizar() {
    // Faz uma requisição GET para a API para obter os pedidos
    axios.get('http://127.0.0.1:8000/pedidos/')
      .then(response => setData(response.data)) // Atualiza o estado 'data' com os dados obtidos
      .catch(error => console.log(error)); // Exibe um erro no console, se ocorrer algum problema na requisição
  }

  // useEffect é usado para executar a função 'renderizar' somente uma vez, no momento em que o componente é montado
  useEffect(renderizar, []);

  // Retorna a estrutura do componente
  return (
    <div className="container">
      <h1>Pedidos</h1>
      {data.map((item) => (
        <div className="card" key={item.id} id={item.id}>
          <h3>Usuário: {item.nome}</h3>
          <h3>Email: {item.contato}</h3>
          <h3>Pedido: {item.pedido}</h3>
          <button className="button1" onClick={ e =>{axios.delete(`http://127.0.0.1:8000/pedidos/${e.target.parentElement.id}/`);renderizar()}}>
            Aceitar Pedido
          </button>
          <button className="delete-button" onClick={ e =>{axios.delete(`http://127.0.0.1:8000/pedidos/${e.target.parentElement.id}/`);renderizar()}}>
            Recusar
          </button>
        </div>
      ))}
      <div className="nav-bar">
        <a href={`/`}>
          <button className="back-button">Sair</button>
        </a>
      </div>
    </div>
  );
};


export default Pedidos;
