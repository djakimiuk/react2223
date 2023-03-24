// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import airports from '../../common/consts/airports';
import { uniqueId } from 'lodash';

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
    localStorage.setItem(
      'airports',
      JSON.stringify(
        airports.map((airport) => ({ ...airport, airportId: uniqueId() }))
      )
    );
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
