import {Map, fromJS} from 'immutable';

// Initial state
const initialState = Map({
  isLoggedIn: false,
  currentUser: null,
  authenticationToken: null
});

// Actions
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

export function onUserLoginSuccess(email, token) {
  return{
    type: USER_LOGIN_SUCCESS,
    payload: {
      token: fromJS(token),
      email:fromJS(email)
    }
  };
}

export function onUserLoginError(profile, token) {
  return{
    type: USER_LOGIN_ERROR,
    payload: error,
    error: true
  };
}

//Reducer
export default function AuthStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return state
        .set('isLoggedIn', true)
        .set('currentUser', action.payload.email)
        .set('authenticationToken', action.payload.token);
    case USER_LOGIN_ERROR:
      return initialState;
    default:
      return state;
  }
}
