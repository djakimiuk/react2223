import React from 'react';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedAirport } from '../../redux/airportsSlice';

const AirportList = () => {
  const [snackbarIsVisible, setSnackbarIsVisible] = useState(false);
  const airportsList = useSelector((state) => state.airports.list);
  const location = useLocation();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (location?.state?.removedAirport) {
      setSnackbarIsVisible(true);
    }
  }, [location]);

  const handleItemClick = (airport) => {
    dispatch(setSelectedAirport(airport));
    navigate(`/airport/details/${airport.airportId}`);
  };

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
        {airportsList.length > 0
          ? airportsList.map((airport) => (
              <span onClick={() => handleItemClick(airport)}>
                {' '}
                {airport.name} {airport.id}{' '}
              </span>
            ))
          : 'brak lotnisk do wyświetlenia'}
      </header>
    </div>
  );
};

export default AirportList;
