import React from 'react';
import styles from './Header.module.scss';
import WithRouterHOC from '../WithRouterHOC/WithRouterHOC';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadAirports, removeAirports } from '../../redux/airportsSlice';
import axios from 'axios';

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    localStorage.removeItem('loggedUser');
    navigate('/');
  };

  const getAirportsFromAPI = async () => {
    try {
      const response = await axios.get('http://localhost:9000/airports');
      dispatch(loadAirports(response.data))
    } catch (error) {
      // TODO
    }
  }

  const userFromLocalStorage =
    localStorage.loggedUser && JSON.parse(localStorage.loggedUser);
  return (
    <div className={styles.HeaderWrapper}>
      <button onClick={handleButtonClick}>Sign Out</button>
      <p>Jesteś zalogowany jako: </p>
      {userFromLocalStorage?.userFirstName} {userFromLocalStorage?.userLastName}
      <button onClick={() => getAirportsFromAPI()}>Załaduj lotniska</button>
      <button onClick={() => dispatch(loadAirports())}>Załaduj lotniska - z błędem</button>
    </div>
  );
};

export default WithRouterHOC(Header);
