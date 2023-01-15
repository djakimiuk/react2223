import React from 'react';
import styles from './Header.module.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: '',
      searchOnlyCars: false,
    };
  }

  handleSearchPhraseChange = (event) => {
    this.setState({ searchPhrase: event.target.value });
  };

  handleOnlyCarsChange = (event) => {
    this.setState({ searchOnlyCars: event.target.checked });
  };

  filterVehicles = () => {
    const { vehicles } = this.props;
    const { searchPhrase, searchOnlyCars } = this.state;

    // odfiltrowanie zgodnych wyników
    let filteredVehicles = vehicles.filter((vehicle) =>
      vehicle.brand.includes(searchPhrase)
    );
    if (searchOnlyCars) {
      filteredVehicles = filteredVehicles.filter(
        (vehicle2) => vehicle2.type === 'car'
      );
    }
    // przekazanie wyfiltrowanych pojazdów do komponentu rodzica (App)
    this.props.sendFilteredVehiclesToParentComponent(filteredVehicles);
  };

  render() {
    const { searchPhrase, searchOnlyCars } = this.state;
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
        <button onClick={this.filterVehicles}>Wyszukaj</button>
      </div>
    );
  }
}

export default Header;
