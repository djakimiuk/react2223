import React from 'react';
import styles from './Header.module.scss';
import WithRouterHOC from '../WithRouterHOC/WithRouterHOC';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadAirports, setAirportsLoadingState, setResponseError } from '../../redux/airportsSlice';
import axios from 'axios';

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    localStorage.removeItem('loggedUser');
    navigate('/');
  };

  const getAirportsFromAPI = async (path) => {
    try {
      dispatch(setAirportsLoadingState('loading'))
      const response = await axios.get(`http://localhost:9000/${path}`);
      dispatch(loadAirports(response.data))
      dispatch(setAirportsLoadingState('success'))
    } catch (error) {
      dispatch(setAirportsLoadingState('error'))
      dispatch(setResponseError(error.response.data.error))
    }
  }

  const userFromLocalStorage =
    localStorage.loggedUser && JSON.parse(localStorage.loggedUser);
  return (
    <div className={styles.HeaderWrapper}>
      <button onClick={handleButtonClick}>Sign Out</button>
      <p>Jesteś zalogowany jako: </p>
      {userFromLocalStorage?.userFirstName} {userFromLocalStorage?.userLastName}
      <button onClick={() => getAirportsFromAPI('airports')}>Załaduj lotniska</button>
      <button onClick={() => getAirportsFromAPI('airports/delayed')}>Załaduj lotniska - z opóźnieniem</button>
      <button onClick={() => getAirportsFromAPI('airports/delayed/failed')}>Załaduj lotniska - z błędem</button>
    </div>
  );
};

export default WithRouterHOC(Header);
