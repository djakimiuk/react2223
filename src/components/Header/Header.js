import React from 'react';
import styles from './Header.module.scss';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.HeaderWrapper}>
        User info and Sign Out button will be here :)
      </div>
    );
  }
}

export default Header;
