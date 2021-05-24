import React from 'react';
import {connect} from 'react-redux';
import {buyCake, buyIceCreams} from '../redux';
function mapDispatchToProps(props) {
  return (
    <div>
      <button onClick={props.buyItem}>dispatch function</button>
    </div>
  );
}

const mapDispatchToProperty = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.iceCream
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCreams());
  return {
    buyItem: dispatchFunction,
  };
};
export default connect(null, mapDispatchToProperty)(mapDispatchToProps);
