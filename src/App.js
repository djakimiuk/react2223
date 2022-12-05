import React, { useState } from 'react';
import LeftColumn from './components/LeftColumn/LeftColumn';
import RightColumn from './components/RightColumn/RightColumn';
import Header from './components/Header/Header';
import styles from './App.module.scss';

function App() {
  const leftColumnText = 'Left column';
  const rightColumnText = 'Right column';

  const [timerValue, setTimerValue] = useState(0);

  setTimeout(() => {
    setTimerValue(timerValue + 1);
  }, 1000);

  return (
    <div className={styles.appWrapper}>
      <Header timerValue={timerValue} />
      <div className={styles.columnsWrapper}>
        <LeftColumn timerValue={timerValue} text={leftColumnText} />
        <RightColumn timerValue={timerValue} text={rightColumnText} />
      </div>
    </div>
  );
}

export default App;
