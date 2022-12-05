import React from 'react';
import logo from '../.././logo.svg';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';

class LeftColumn extends React.Component {
  static defaultProps = {
    text: 'Missing text from props',
  };
  render() {
    return (
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
          <img src={logo} className={commonColumnsStyles.AppLogo} alt="logo" />
          <p>{this.props.text}</p>
        </header>
      </div>
    );
  }
}

export default LeftColumn;
