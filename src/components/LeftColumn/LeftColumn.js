import React from 'react';
// import styles from './LeftColumn.module.scss';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';
import Form from '../Form/Form';

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
    this.setMessageAfterSubmitChildComponentForm =
      this.setMessageAfterSubmitChildComponentForm.bind(this);
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

  setMessageAfterSubmitChildComponentForm(messageFromChildComponent) {
    this.setState({ messageText: messageFromChildComponent });
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
          <Form
            sendMessageToParentComponent={
              this.setMessageAfterSubmitChildComponentForm
            }
          />
          <p>{this.state.messageText}</p>
        </header>
      </div>
    );
  }
}

export default LeftColumn;
