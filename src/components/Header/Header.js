import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.HeaderWrapper}>
        <Link to="/">
          <button>Sign Out</button>
        </Link>
      </div>
    );
  }
}

export default Header;
