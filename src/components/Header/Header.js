import React from 'react';
import styles from './Header.module.scss';
import WithRouterHOC from '../WithRouterHOC/WithRouterHOC';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    localStorage.removeItem('loggedUser');
    navigate('/');
  };

  const userFromLocalStorage =
    localStorage.loggedUser && JSON.parse(localStorage.loggedUser);
  return (
    <div className={styles.HeaderWrapper}>
      <button onClick={handleButtonClick}>Sign Out</button>
      <p>Jesteś zalogowany jako: </p>
      {userFromLocalStorage?.userFirstName} {userFromLocalStorage?.userLastName}
    </div>
  );
};

export default WithRouterHOC(Header);
