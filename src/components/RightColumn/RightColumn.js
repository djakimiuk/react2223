import { useState } from 'react';
// import styles from './RightColumn.module.scss';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';
import Form from '../Form/Form';

function RightColumn(props) {
  const [currentInputValue, setCurrentInputValue] = useState('');
  const [messageText, setMessageText] = useState('');
  const buttonText = 'Double click should reset a timer';

  const handleDoubleClick = () => {
    props.onDoubleButtonClick();
  };

  const handleChangeInputValue = (event) => {
    setCurrentInputValue(event.target.value);
  };

  const handleSetTimerFromValue = () => {
    props.onSetTimerToValue(currentInputValue);
  };

  const setMessageAfterSubmitChildComponentForm = (
    messageFromChildComponent
  ) => {
    setMessageText(messageFromChildComponent);
  };

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <button onDoubleClick={handleDoubleClick}> {buttonText} </button>
        <input
          type="number"
          onChange={handleChangeInputValue}
          value={currentInputValue}
        />
        <button onClick={handleSetTimerFromValue}>
          Set value from input to timer
        </button>
        <Form
          sendMessageToParentComponent={setMessageAfterSubmitChildComponentForm}
        />
        <p>{messageText}</p>
      </header>
    </div>
  );
}

export default RightColumn;
