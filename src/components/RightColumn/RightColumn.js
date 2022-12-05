import React, { useState } from 'react';
import logo from '../.././logo.svg';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';

function RightColumn(props) {
  const { text = 'Missing text from props' } = props;

  const [initialCounterValue, setInitialCounterValue] = useState(5000);

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <img
          src={props.timerValue % 2 === 0 && logo}
          className={commonColumnsStyles.AppLogo}
          alt=""
        />
        <p> {`${text} count from ${initialCounterValue}`} </p>
        <p> {initialCounterValue + props.timerValue} </p>
      </header>
    </div>
  );
}

export default RightColumn;
