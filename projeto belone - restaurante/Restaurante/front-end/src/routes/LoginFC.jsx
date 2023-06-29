import React, { useState } from 'react';
import "./Login.css"
import logo from './imagens/Borcelle.png';


const Login1 = () => {
 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Função para lidar com a alteração do nome de usuário
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === 'usuario' && password === 'usuario') {
      // Login bem-sucedido
      setLoginSuccess(true);
      setError('');
    } else {
      // Dados inválidos
      setError('Dados inválidos');
      setLoginSuccess(false);
    }
  };

  // mostrar senha
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

 
  return (
    <div className="container">
      <h2 className="title">Login</h2>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="username" className="label">Usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">Senha:</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="input"
            />
            <button type="button" onClick={toggleShowPassword} className="toggle-password">
              {showPassword ? 'Esconder' : 'Mostrar'}
            </button>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">Logar</button>
        </div>
        {error && <p className="error-message">{error}</p>}
        <a href={`/contacts/5`}>{loginSuccess && <p className="success-message">Login bem-sucedido! Clique Aqui</p>}</a>
      </form>
    </div>
  );
};


export default Login1;
