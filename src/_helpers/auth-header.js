import { authenticationService } from '../_services';

export function authHeader() {
  /** Return autorization header with JWT */
  const currentUser = authenticationService.currentUserValue;

  if (currentUser && currentUser.token) {
    return { Authorization: `Bearer ${currentUser.token}`};
  } else {
    return {};
  }
}