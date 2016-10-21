import { createStore } from 'redux';
import AuthStateReducer from '../services/AuthState';
// create the store
const store = createStore(AuthStateReducer);
export default store;
