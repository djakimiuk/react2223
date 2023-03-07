// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const navigate = useNavigate();

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleButtonClick = () => {
    const userData = { userFirstName: firstName, userLastName: lastName };
    localStorage.setItem('loggedUser', JSON.stringify(userData));
    navigate('/dashboard');
  };

  return (
    <>
      <label>Imie:</label>
      <input onChange={handleFirstName}></input>
      <label>Nazwisko:</label>
      <input onChange={handleLastName}></input>
      <button disabled={!firstName || !lastName} onClick={handleButtonClick}>
        Sign In
      </button>
    </>
  );
};
