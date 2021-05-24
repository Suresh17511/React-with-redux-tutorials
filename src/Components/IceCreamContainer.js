import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {buyIceCreams} from '../redux';

function IceCreamContainer() {
  const noOfIceCreams = useSelector((state) => state.iceCreams.noOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>No of Cakes - {noOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCreams())}>
        buy ice cream using Hook
      </button>
    </div>
  );
}

export default IceCreamContainer;
