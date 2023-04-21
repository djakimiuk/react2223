import React from 'react';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedAirport, setResponseError, setAirportsLoadingState } from '../../redux/airportsSlice';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

const AirportList = () => {
  const [snackbarIsVisible, setSnackbarIsVisible] = useState(false);
  const airportsList = useSelector((state) => state.airports.list);
  const loadingStatus = useSelector((state) => state.airports.airportsLoadingState);
  const responseError = useSelector((state) => state.airports.responseError);
  const location = useLocation();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
      setSnackbarIsVisible(true);
  }, [responseError]);

  const handleItemClick = async (airport) => {
    try {
      dispatch(setAirportsLoadingState('loading'))
      const response = await axios.get(`http://localhost:9000/airports/${airport.id}/delayed`);
      dispatch(setSelectedAirport(response.data))
      dispatch(setAirportsLoadingState('success'))
      navigate(`/airport/details/${airport.id}`);
    } catch(error) {
      dispatch(setAirportsLoadingState('error'))
    }
  };

  return (
    <div className={commonColumnsStyles.App}>
      <Snackbar
        open={snackbarIsVisible}
        autoHideDuration={3000}
        onClose={() => setSnackbarIsVisible(false)}
        message={`${responseError}`}
      />
      <header className={commonColumnsStyles.AppHeader}>
        <p>AirportList</p>
        {loadingStatus === 'loading' ? <CircularProgress /> :
        airportsList.length > 0
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
