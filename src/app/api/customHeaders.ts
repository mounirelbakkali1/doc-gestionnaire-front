import { HttpHeaders } from '@angular/common/http';

// add authorization header with jwt token if available
const headers = new HttpHeaders({
  'Content-Type': 'application/json; charset=utf-8',
  Authorization: 'Bearer ' + localStorage.getItem('access_token'),
});

export const customHeaders = { headers: headers };
