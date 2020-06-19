import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import City from './city'

class CityList extends Component {
  listCities = () => {
    return this.props.cities.map((city) => {
      return (
        <City
          key={city.name}
          name={city.name}
          address={city.address}
          />
      );
    }
  )};

  render() {
    return (
      <ul className="cities">
        { this.listCities() }
      </ul>
    );
  }
};

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps)(CityList);
