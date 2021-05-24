import React from 'react';
import {connect} from 'react-redux';
function mapStateToProps(props) {
  return (
    <div>
      <h2>item -{props.item}</h2>
    </div>
  );
}
const mapStateToProperty = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.noOfCakes
    : state.iceCreams.noOfIceCreams;
  return {
    item: itemState,
  };
};

export default connect(mapStateToProperty)(mapStateToProps);
