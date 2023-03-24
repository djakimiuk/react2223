import React from 'react';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';
import { useParams } from 'react-router-dom';
const AirportDetails = () => {
  const params = useParams();
  const airportsList = JSON.parse(localStorage.airports);
  const matchAirport = airportsList.find(
    (airport) => airport.airportId === params.id
  );
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Airport Details</p>
        <span>Nazwa: {matchAirport.name}</span>
        <span>Państwo: {matchAirport.country}</span>
        <span>Miasto: {matchAirport.city}</span>
        ...
      </header>
    </div>
  );
};

export default AirportDetails;
