import React from 'react';
import styles from './Header.module.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: '',
      searchOnlyCars: false,
      searchEngineType: '',
    };
  }

  handleSearchPhraseChange = (event) => {
    this.setState({ searchPhrase: event.target.value });
  };

  handleOnlyCarsChange = (event) => {
    this.setState({ searchOnlyCars: event.target.checked });
  };

  handleSelectEngineType = (event) => {
    this.setState({ searchEngineType: event.target.value });
  };

  filterVehicles = () => {
    const { vehicles } = this.props;
    const { searchPhrase, searchOnlyCars, searchEngineType } = this.state;

    // odfiltrowanie zgodnych wyników
    let filteredVehicles = vehicles.filter((vehicle) =>
      vehicle.brand.includes(searchPhrase)
    );
    if (searchOnlyCars) {
      filteredVehicles = filteredVehicles.filter(
        (vehicle) => vehicle.type === 'car'
      );
    }
    if (searchEngineType) {
      filteredVehicles = filteredVehicles.filter(
        (vehicle) => vehicle.engineType === searchEngineType
      );
    }
    // przekazanie wyfiltrowanych pojazdów do komponentu rodzica (App)
    this.props.sendFilteredVehiclesToParentComponent(filteredVehicles);
  };

  getUniqueVehicleEngineTypes = () => {
    const { vehicles } = this.props;
    const vehicleEngineList = vehicles.map((vehicle) => vehicle.engineType);
    const uniqueVehicleEngineList = [...new Set(vehicleEngineList)];
    return uniqueVehicleEngineList;
  };

  render() {
    const uniqueVehicleEngineTypes = this.getUniqueVehicleEngineTypes();
    const { searchPhrase, searchOnlyCars, searchEngineType } = this.state;
    return (
      <div className={styles.HeaderWrapper}>
        <input
          value={searchPhrase}
          onChange={this.handleSearchPhraseChange}
        ></input>
        <p> Tylko samochody </p>
        <input
          type="checkbox"
          onChange={this.handleOnlyCarsChange}
          value={searchOnlyCars}
        ></input>
        <p> Typ silnika </p>
        <select value={searchEngineType} onChange={this.handleSelectEngineType}>
          <option key={'all'} value={''}>
            All types
          </option>
          {uniqueVehicleEngineTypes.map((engineType) => (
            <option key={engineType} value={engineType}>
              {engineType}
            </option>
          ))}
        </select>
        <button onClick={this.filterVehicles}>Wyszukaj</button>
      </div>
    );
  }
}

export default Header;
