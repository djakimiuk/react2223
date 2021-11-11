import Results from "./components/Results/Results";
// import RightColumn from './components/RightColumn/RightColumn';
import Header from "./components/Header/Header";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <div className={styles.columnsWrapper}>
        <Results />
        {/* <RightColumn /> */}
      </div>
    </div>
  );
}

export default App;
