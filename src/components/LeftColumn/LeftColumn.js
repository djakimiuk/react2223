import React from 'react';
import logo from '../.././logo.svg';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';

class LeftColumn extends React.Component {
  static defaultProps = {
    text: 'Missing text from props',
  };

  // constructor - wykonuje się tylko raz przy pierwszym montowaniu komponentu
  constructor(props) {
    super(props);
    this.state = {
      counter: 100,
    };
  }

  // shouldComponentUpdate - wykonuje się za każdymn razem tuż przed przerysowaniem komponentu (metoda render),
  // jeżeli zwraca false komponent się "blokuje" i nie dochodzi do przerysowania
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.timerValue % 2 === 0) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
          <img src={logo} className={commonColumnsStyles.AppLogo} alt="logo" />
          <p> {`${this.props.text} count from ${this.state.counter}`} </p>
          <p> {this.state.counter + this.props.timerValue} </p>
        </header>
      </div>
    );
  }
}

export default LeftColumn;
