import React, { Component } from 'react';

import City from './city'

const CityList = (props) => {
  const listCities = () => {
    return props.cities.map((cities) => {
      return (
        <City
          key={cities.name}
          name={cities.name}
          address={cities.address}
          />
      );
    }
  )};

  return (
    <div className="cities">
      { listCities() }
    </div>
  )
}

export default CityList;
