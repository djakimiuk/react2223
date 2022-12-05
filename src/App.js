import LeftColumn from './components/LeftColumn/LeftColumn';
import RightColumn from './components/RightColumn/RightColumn';
import Header from './components/Header/Header';
import styles from './App.module.scss';

function App() {
  const leftColumnText = 'Left column';
  const rightColumnText = 'Right column';
  return (
    <div className={styles.appWrapper}>
      <Header />
      <div className={styles.columnsWrapper}>
        <LeftColumn />
        <LeftColumn text={leftColumnText} />
        <RightColumn />
        <RightColumn text={rightColumnText} />
      </div>
    </div>
  );
}

export default App;
