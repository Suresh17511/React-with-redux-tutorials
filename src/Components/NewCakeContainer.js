import React, {useState} from 'react';
import {buyCake} from '../redux';
import {connect} from 'react-redux';
function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <div>Cake Count -{props.noOfCakes}</div>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => props.buyCake(number)}> buy {number} cake</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    noOfCakes: state.cake.noOfCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
