import React, { useState } from 'react';
import axios from 'axios';
import './Cadastro.css';

// Define o componente funcional Cadastro
const Cadastro = () => {
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState(0);

  // Função assíncrona para adicionar um novo usuário (requisição)
  async function addUser() {
    // Faz uma requisição post 
    const response = await axios.post('http://127.0.0.1:8000/funcionarios/', {
      nome: nome,
      senha: senha,
      email: email,
    });

    // Exibe os dados de resposta no console
    console.log(response.data);
  }

  // Retorna a estrutura do componente
  return (
    <div className="container">
      <h1>Cadastro</h1>
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
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
      />
      <p></p>
      <input
        className="input"
        type="text"
        placeholder="Senha"
        onChange={(e) => setSenha(e.target.value)}
      />
      <p></p>
      <nav>
        <ul>
          <li>
            <a href={`/contacts/5`}>
              <button className="button" onClick={addUser}>
                Cadastrar
              </button>
            </a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li>
            <a href={`/contacts/4`}>
              <button className="button back-button">Voltar</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};


export default Cadastro;
