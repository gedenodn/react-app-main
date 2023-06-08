import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    navigate('/register');
  };

  const handleLogin = () => {
    // Тут должна біть логика
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="center-container">
      <h1>Авторизация</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="button-container">
        <button onClick={handleLogin}>Вход</button>
        <button onClick={handleRegister}>Регистрация</button>
      </div>
    </div>
  );
}

export default LoginPage;
