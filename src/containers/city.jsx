import React from 'react';
import { useDispatch } from 'react-redux';
import selectCity from '../actions';

const City = (props) => {
  const dispatch = useDispatch();

  return (
    <li
      className="list-group-item"
      onClick={() => dispatch(selectCity)}
      >
      {props.name}
    </li>
  )
};


export default City;
