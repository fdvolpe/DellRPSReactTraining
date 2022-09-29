import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import ActionComponent from './ActionComponent';
import {globalStore} from './reduxStore/GlobalStore'

function App() {
  return (
    <Provider store={globalStore}>
     <ActionComponent/>
     </Provider>
  );
}

export default App;
