import React from 'react';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';

class LeftColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleIncreaseCounter = this.handleIncreaseCounter.bind(this);
  }

  handleIncreaseCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  render() {
    const { counter } = this.state;
    return (
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
          <button onClick={this.handleIncreaseCounter}> INCREASE BY 1 </button>
          <p>{counter}</p>
        </header>
      </div>
    );
  }
}

export default LeftColumn;
