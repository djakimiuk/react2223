import React from 'react';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';

const AirportList = () => {
  const airportsList = JSON.parse(window.localStorage.getItem('airports'));

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>AirportList</p>
        {airportsList.map((airport) => (
          <span> {airport.name} </span>
        ))}
      </header>
    </div>
  );
};

export default AirportList;
