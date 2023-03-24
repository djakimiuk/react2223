import React from 'react';
import commonColumnsStyles from '../../common/styles/Columns.module.scss';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';

const AirportDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;

  const airportsList = JSON.parse(localStorage.airports);
  const matchAirport = airportsList.find((airport) => airport.airportId === id);

  const handleDeleteItem = () => {
    const airportListWithoutSelected = airportsList.filter(
      (airport) => airport.airportId !== id
    );
    localStorage.setItem(
      'airports',
      JSON.stringify(airportListWithoutSelected)
    );
    navigate('/airport/list');
  };
  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <ArrowBackIcon onClick={() => navigate(-1)} />
        <DeleteIcon onClick={() => handleDeleteItem()} />
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
