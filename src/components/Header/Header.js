import React from 'react';
import styles from './Header.module.scss';

class Header extends React.Component {
    render() {
        return (
            <div className={styles.HeaderWrapper}>
                Filters
            </div>
          );
    }
  }

  export default Header;