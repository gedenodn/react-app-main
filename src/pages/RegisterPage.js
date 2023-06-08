import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    // Выполните необходимую логику для регистрации пользователя
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="center-container">
      <h1>Регистрация</h1>
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
        <button onClick={handleRegister}>Зарегистрироваться</button>
        <button onClick={handleLogin}>Перейти к авторизации</button>
      </div>
    </div>
  );
}

export default RegisterPage;
