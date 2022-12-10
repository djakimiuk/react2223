import React from 'react';
// import styles from './LeftColumn.module.scss';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';

class LeftColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      name: '',
      zodiac: '',
      messageText: '',
    };
    this.handleIncreaseCounter = this.handleIncreaseCounter.bind(this);
    this.handleDecreaseCounter = this.handleDecreaseCounter.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleIncreaseCounter() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  handleDecreaseCounter(event) {
    event.preventDefault();
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  componentDidMount() {
    console.log('MOUNT');
  }

  componentWillUnmount() {
    console.log('UNMOUNT');
    this.props.onSetTimerToValue(495);
  }

  componentDidUpdate() {
    console.log('DID UPDATE ');
  }

  handleChange(event) {
    console.log('event', event);
    // this.setState({ [event.target.name]: event.target.value })
    if (event.target.name === 'name') {
      this.setState({ name: event.target.value });
    }
    if (event.target.name === 'zodiac') {
      this.setState({ zodiac: event.target.value });
    }
  }

  handleSubmit(e) {
    const { name, zodiac } = this.state;
    e.preventDefault();
    this.setState({
      messageText: `Cześć ${name}, twój znak zodiaku to: ${zodiac}`,
    });
  }

  render() {
    const { counter } = this.state;
    //   const { currentTimerValue } = this.props;
    //   const columnShouldBeHide = currentTimerValue > 500;
    // if (columnShouldBeHide) {
    //     return null;
    // }
    return (
      <div className={commonColumnsStyles.App}>
        <header className={commonColumnsStyles.AppHeader}>
          <button
            onClick={this.handleIncreaseCounter}
            onContextMenu={this.handleDecreaseCounter}
          >
            Left click + 1 / Right click -1
          </button>
          <p>{counter}</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Imię:
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Znak zodiaku:
              <input
                type="text"
                name="zodiac"
                value={this.state.zodiac}
                onChange={this.handleChange}
              />
            </label>
            <input type="submit" value="Wyślij" />
          </form>
          <p>{this.state.messageText}</p>
        </header>
      </div>
    );
  }
}

export default LeftColumn;
