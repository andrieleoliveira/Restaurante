import React, { useState } from 'react';
import axios from 'axios';
import './Cadastro.css';

// Define o componente funcional Cadastro1
const Cadastro1 = () => {
  // Define os estados iniciais do nome, email, senha e CNPJ como vazios ou zero
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState(0);
  const [cpf, setCpf] = useState(0);

  // Função assíncrona para adicionar um novo cliente
  async function addUser() {
    // Faz uma requisição POST para a API para cadastrar um novo cliente
    const response = await axios.post('http://127.0.0.1:8000/clientes/', {
      nome: nome,
      senha: senha,
      email: email,
      cpf: cpf,
    });

    
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
      <input
        className="input"
        type="text"
        placeholder="CPF"
        onChange={(e) => setCnpj(e.target.value)}
      />
      <p></p>
      <nav>
        <ul>
          <li>
            <a href={`/contacts/2`}>
              <button className="button" onClick={addUser}>
                Cadastrar Funcionário
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


export default Cadastro1;
