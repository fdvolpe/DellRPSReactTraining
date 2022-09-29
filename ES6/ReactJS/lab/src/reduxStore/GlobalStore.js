import {applyMiddleware, createStore} from 'redux';
import { appReducer } from '../reduxReducer/Reducer';
import logger from 'redux-logger';

export const globalStore = createStore(appReducer, applyMiddleware(logger));