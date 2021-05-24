import {combineReducers} from 'redux';
import cakeReducer from './cakes/cakeReducer';
import iceCreamReducer from './iceCreams/iceCreamReducer';
import userReducer from './user/userReducers';
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCreams: iceCreamReducer,
  user: userReducer,
});
export default rootReducer;
