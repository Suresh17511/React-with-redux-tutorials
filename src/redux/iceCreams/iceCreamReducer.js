import {BUY_ICE_CREAMS} from './iceCreamType';

const initialState = {
  noOfIceCreams: 20,
};
const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAMS:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1,
      };
    default:
      return state;
  }
};
export default iceCreamReducer;
