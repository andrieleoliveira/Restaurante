import React, { useState } from 'react';
import axios from 'axios';
import './Fazerpedido.css';

// Define o componente funcional Fazerpedido
const Fazerpedido = () => {
  // Define os estados utilizando o hook useState
  const [nome, setNome] = useState('');
  const [contato, setContato] = useState('');
  const [pedido, setPedido] = useState('');

  // Função assíncrona para adicionar um pedido
  async function addUser() {
    const response = await axios.post('http://127.0.0.1:8000/pedidos/', {
      nome: nome,
      contato: contato,
      pedido: pedido,
    });
    console.log(response.data);
  }

  // Retorna a estrutura do componente
  return (
    <div className="container">
      <h1>Fazer Pedido</h1>
      <input
        className="input"
        type="text"
        placeholder="Nome"
        onChange={(e) => setNome(e.target.value)}
      />
      <p></p>
      <input
        className="input"
        type="text"
        placeholder="Contato"
        onChange={(e) => setContato(e.target.value)}
      />
      <p></p>
      <input
        className="input input-pedido"
        type="text"
        placeholder="Pedido"
        onChange={(e) => setPedido(e.target.value)}
      />
      <p></p>
      <nav>
        <ul>
          <li>
            <a href={`/contacts/5`}>
              <button className="button" onClick={addUser}>
                Enviar Pedido
              </button>
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <a href={`/`}>
              <button className="button back-button">Voltar</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};


export default Fazerpedido;
