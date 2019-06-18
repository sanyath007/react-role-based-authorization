import { authenticationService } from '../_services';

export function handleResponse(res) {
  return res.text().then(text => {
    const data = text && JSON.parse(text);

    if (!res.ok) {
      if ([401, 403].indexOf(res.status) !== -1) {
        /** Auto logout if 401 Unauthorized or 403 Forbidden response return from API */
        authenticationService.logout();
        location.reload(true);
      }

      const err = (data && data.message) || res.statusText;
      
      return Promise.reject(err);
    }

    return data;
  });
}