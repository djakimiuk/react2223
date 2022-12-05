import React from 'react';
import logo from '../.././logo.svg';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';

class LeftColumn extends React.Component {
  static defaultProps = {
    text: 'Missing text from props',
  };

  constructor(props) {
    super(props);
    this.state = {
      counter: 100,
    };
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
