import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {buyCake} from '../redux';

function HookCakeContainer() {
  const noOfCakes = useSelector((state) => state.cake.noOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>No of Cakes - {noOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>buy Cake using Hook</button>
    </div>
  );
}

export default HookCakeContainer;
