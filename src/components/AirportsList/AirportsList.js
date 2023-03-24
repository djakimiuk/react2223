import React from 'react';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';
import { useNavigate } from 'react-router-dom';

const AirportList = () => {
  const airportsList = JSON.parse(window.localStorage.getItem('airports'));
  const navigate = useNavigate();

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>AirportList</p>
        {airportsList.map((airport) => (
          <span
            onClick={() => navigate(`/airport/details/${airport.airportId}`)}
          >
            {' '}
            {airport.name} {airport.airportId}{' '}
          </span>
        ))}
      </header>
    </div>
  );
};

export default AirportList;
