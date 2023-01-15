import React, { useState } from 'react';
import Results from './components/Results/Results';
// import RightColumn from './components/RightColumn/RightColumn';
import vehicles from './common/consts/vehicles';
import Header from './components/Header/Header';
import styles from './App.module.scss';

function App() {
  const [resultsToDisplay, setResultsToDisplay] = useState(vehicles);
  console.log('wszystkie pojazdy', vehicles);
  return (
    <div className={styles.appWrapper}>
      <Header
        vehicles={vehicles}
        sendFilteredVehiclesToParentComponent={setResultsToDisplay}
      />
      <div className={styles.columnsWrapper}>
        <Results vehiclesToDisplay={resultsToDisplay} />
        {/* <RightColumn /> */}
      </div>
    </div>
  );
}

export default App;
