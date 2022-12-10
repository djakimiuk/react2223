import { useState } from 'react';
// import styles from './RightColumn.module.scss';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';

function RightColumn(props) {
  const [currentInputValue, setCurrentInputValue] = useState('');
  const [name, setName] = useState('');
  const [zodiac, setZodiac] = useState('');
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessageText(`Cześć ${name}, twój znak zodiaku to: ${zodiac}`);
  };

  const handleChange = (event) => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    }
    if (event.target.name === 'zodiac') {
      setZodiac(event.target.value);
    }
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
        <form onSubmit={handleSubmit}>
          <label>
            Imię:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <label>
            Znak zodiaku:
            <input
              type="text"
              name="zodiac"
              value={zodiac}
              onChange={handleChange}
            />
          </label>
          <input type="submit" value="Wyślij" />
        </form>
        <p>{messageText}</p>
      </header>
    </div>
  );
}

export default RightColumn;
