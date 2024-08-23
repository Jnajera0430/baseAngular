import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpHeadersService {
  private token = localStorage.getItem('access_token');
  constructor() {}

  public GetHeaders(): HttpHeaders {
    let headers = new Headers();
    headers.append('Authorization', this.token ?? '');
    headers.append('Content-Type', 'aplication/json');
    return new HttpHeaders(headers);
  }

  public UnauthorizedHeaders() {
    return new HttpHeaders();
  }

  public FormDataHeaders() {
    let headers = new Headers();
    headers.append('Authorization', this.token ?? '');
    headers.append('Content-Type', 'multipart/form-data');
  }
}
