import React from 'react';
import { useSelector } from 'react-redux';

const ActiveCity = () => {
  const active = useSelector(state => state.active);

  if (active === null) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  } else {
    const url = `https://kitt.lewagon.com/placeholder/cities/${active.slug}`;

    return (
      <div className="active-city">
        <h3>{active.name}</h3>
        <p>{active.address}</p>
        <img src={url} width="100%" />
      </div>
    );
  }
}

export default ActiveCity;
