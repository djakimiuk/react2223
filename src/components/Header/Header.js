import React from 'react';
import styles from './Header.module.scss';
import WithRouterHOC from '../WithRouterHOC/WithRouterHOC';

class Header extends React.Component {
  handleButtonClick = () => {
    localStorage.removeItem('loggedUser');
    this.props.navigate('/');
  };

  render() {
    const userFromLocalStorage =
      localStorage.loggedUser && JSON.parse(localStorage.loggedUser);

    return (
      <div className={styles.HeaderWrapper}>
        <button onClick={this.handleButtonClick}>Sign Out</button>
        <p>Jesteś zalogowany jako: </p>
        {userFromLocalStorage?.userFirstName}{' '}
        {userFromLocalStorage?.userLastName}
      </div>
    );
  }
}

export default WithRouterHOC(Header);
