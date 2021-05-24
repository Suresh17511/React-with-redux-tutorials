import {Provider} from 'react-redux';
import './App.css';
import CakeContainer from './Components/CakeContainer';
import HookCakeContainer from './Components/HookCakeContainer';
import IceCreamContainer from './Components/IceCreamContainer';
import MapDispatchToProps from './Components/MapDispatchToProps';
import MapStateToProps from './Components/MapStateToProps';
import NewCakeContainer from './Components/NewCakeContainer';
import UserContainer from './Components/UserContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <UserContainer />
      {/* <div>
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
        <div>
          <NewCakeContainer />
        </div>
      </div>
      <div>
        <MapStateToProps cake />
        <MapStateToProps />
        <MapDispatchToProps />
      </div> */}
    </Provider>
  );
}

export default App;
