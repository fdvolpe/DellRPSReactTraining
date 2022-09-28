import {createStore} from 'redux';
import { appReducer } from '../reduxReducer/Reducer';

export const globalStore = createStore(appReducer);