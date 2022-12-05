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
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.timerValue % 2 === 0) {
  //     return true;
  //   }
  //   return false;
  // }

  componentDidMount() {
    console.log('WYKONUJE SIĘ TYLKO PRZY MONTOWANIU');
  }

  componentWillUnmount() {
    console.log('WYKONUJE SIĘ TYLKO PRZED ODMONTOWANIEM KOMPONENTU');
    document.title = ' ^^__^^ ';
  }

  componentDidUpdate(prevProps) {
    console.log('WYKONUJE SIE PO KAŻDYM PRZERYSOWANIU');
    if (prevProps.timerValue % 2 === 0) {
      document.title = ':)';
    } else {
      document.title = ':(';
    }
  }

  render() {
    const { timerValue, text } = this.props;
    const { counter } = this.state;
    return (
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
          <img
            src={timerValue % 2 !== 0 && logo}
            className={commonColumnsStyles.AppLogo}
            alt=""
          />
          <p> {`${text} count from ${counter} only even numbers`} </p>
          <p>
            {' '}
            {counter +
              (timerValue % 2 === 0 ? timerValue : timerValue - 1)}{' '}
          </p>
        </header>
      </div>
    );
  }
}

export default LeftColumn;
