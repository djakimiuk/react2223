import commonColumnsStyles from '../../common/styles/Columns.module.scss';
import { useState } from 'react';

function RightColumn(props) {
  const buttonText = 'Double click should reset a timer';
  const [currentInputValue, setCurrentInputValue] = useState('');

  const handleDoubleClick = () => {
    props.onDoubleButtonClick();
  };

  const handleChangeInputValue = (event) => {
    setCurrentInputValue(event.target.value);
  };

  const handleSetTimerFromValue = () => {
    props.setTimerFromValue(currentInputValue);
  };

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <button onDoubleClick={handleDoubleClick}> {buttonText} </button>
        <p>Right column</p>
        <input
          type="number"
          onChange={handleChangeInputValue}
          value={currentInputValue}
        />
        <button onClick={handleSetTimerFromValue}>
          Set value from input to timer
        </button>
      </header>
    </div>
  );
}

export default RightColumn;
