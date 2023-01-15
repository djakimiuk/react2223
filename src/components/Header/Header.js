import React from 'react';
import styles from './Header.module.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPhrase: '',
    };
  }

  handleSearchPhraseChange = (event) => {
    this.setState({ searchPhrase: event.target.value });
  };

  filterVehicles = () => {
    const { vehicles } = this.props;
    const { searchPhrase } = this.state;

    // odfiltrowanie zgodnych wyników
    const filteredVehicles = vehicles.filter((vehicle) =>
      vehicle.brand.includes(searchPhrase)
    );
    // przekazanie wyfiltrowanych pojazdów do komponentu rodzica (App)
    this.props.sendFilteredVehiclesToParentComponent(filteredVehicles);
  };
  render() {
    const { searchPhrase } = this.state;
    return (
      <div className={styles.HeaderWrapper}>
        <input
          value={searchPhrase}
          onChange={this.handleSearchPhraseChange}
        ></input>
        <button onClick={this.filterVehicles}>Wyszukaj</button>
      </div>
    );
  }
}

export default Header;
