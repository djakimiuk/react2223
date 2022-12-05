import React, { useState, useEffect } from 'react';
import logo from '../.././logo.svg';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';

function RightColumn(props) {
  const { text = 'Missing text from props' } = props;

  const [initialCounterValue, setInitialCounterValue] = useState(5000);

  // useEffect(() => {
  //   console.log('wykonuje się tylko przy montowaniu');
  // }, []);

  // useEffect(() => {
  //   console.log('to się również wykona wykona przy montowaniu');
  //   // return () => { ... } - kod na miejscu "..." wykona się tylko przed odmontowaniem
  //   return () => {
  //     console.log('wykonuje się tylko przed odmontowaniem komponentu');
  //     document.title = ' ^^__^^ ';
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log('wykonuje się przy każdej zmianie "props.timerValue"');
  //   if (props.timerValue % 2 === 0) {
  //     document.title = ':)';
  //   } else {
  //     document.title = ':(';
  //   }
  // }, [props.timerValue]);

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
