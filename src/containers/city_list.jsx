import React, { Component } from 'react';
import { useSelector } from 'react-redux';

import City from './city';

const CityList = () => {
  const cities = useSelector(state => state.cities);

  const listCities = () => {
    return cities.map((city) => {
      return (
        <City
          key={city.name}
          name={city.name}
          address={city.address}
        />
      );
    });
  }

  return (
    <ul className="cities">
      { listCities() }
    </ul>
  );

};

export default CityList;
