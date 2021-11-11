import LeftColumn from "./components/LeftColumn/LeftColumn";
import RightColumn from "./components/RightColumn/RightColumn";
import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import { useState } from "react";

function App() {
  const [timerValue, setTimerValue] = useState(0);

  setTimeout(() => {
    setTimerValue(timerValue + 1);
  }, 1000);

  return (
    <div className={styles.appWrapper}>
      <Header timerValue={timerValue} />
      <div className={styles.columnsWrapper}>
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
}

export default App;
