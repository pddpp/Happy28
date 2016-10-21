import * as env from '../env';
import Auth0Lock from 'react-native-lock';
import * as AuthStatActions from './AuthState';
import store from '../redux/store';
const clientId = env.AUTH0_CLIENT_ID;
const domain = env.AUTH0_DOMAIN;
const authenticationEnabled = clientId && domain;

let lock = null;
if (authenticationEnabled) {
  lock = new Auth0Lock({
    clientId,
    domain
  });
} else {
  console.warn('Authentication not enabled: Auth0 configuration not provided');
}

export function showLogin() {
  if (!authenticationEnabled) {
    return;
  }
  lock.show({}, (err, profile, token) => {
    if (err) {
      store.dispatch(AuthStatActions.onUserLoginError(err));
      return;
    }
    store.dispatch(AuthStatActions.onUserLoginSuccess(profile.email, token));
  });
}
