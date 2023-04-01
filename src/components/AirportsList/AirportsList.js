import React from 'react';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const AirportList = () => {
  const [snackbarIsVisible, setSnackbarIsVisible] = useState(false);
  const airportsList = useSelector((state) => state.airports.list);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location?.state?.removedAirport) {
      setSnackbarIsVisible(true);
    }
  }, [location]);

  return (
    <div className={commonColumnsStyles.App}>
      <Snackbar
        open={snackbarIsVisible}
        autoHideDuration={3000}
        onClose={() => setSnackbarIsVisible(false)}
        message={`Usunąłeś lotnisko o nazwie ${location?.state?.removedAirport?.name}`}
      />
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
