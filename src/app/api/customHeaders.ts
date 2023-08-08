import { HttpHeaders } from '@angular/common/http';

// add authorization header with jwt token if available
const headers = new HttpHeaders({
  Authorization: 'Bearer ' + localStorage.getItem('access_token'),
});

export const customHeaders = { headers: headers };
