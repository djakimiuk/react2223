import LeftColumn from './components/LeftColumn/LeftColumn';
import RightColumn from './components/RightColumn/RightColumn';
import Header from './components/Header/Header';
import styles from './App.module.scss';
import { useState, useEffect } from 'react';

function App() {
  const [timerValue, setTimerValue] = useState(0);

  // setTimeout(() => {
  //   setTimerValue(timerValue + 1);
  // }, 1000);

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setTimerValue(timerValue + 1);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [timerValue]);

  const resetTimer = () => {
    setTimerValue(0);
  };

  const setTimerFromValue = (valueFromChildComponent) => {
    console.log('valueFromChildComponent', typeof valueFromChildComponent);
    setTimerValue(parseInt(valueFromChildComponent));
  };

  return (
    <div className={styles.appWrapper}>
      <Header timerValue={timerValue} />
      <div className={styles.columnsWrapper}>
        <LeftColumn />
        <RightColumn
          onDoubleButtonClick={resetTimer}
          setTimerFromValue={setTimerFromValue}
        />
      </div>
    </div>
  );
}

export default App;
