import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpHeadersService {
  private readonly token =
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJvb3QiLCJpZCI6IjY2MmFkZTIwMjk5YjUxZDhjODk1OTA1MyIsImlhdCI6MTcyNDM5MDY2MywiZXhwIjoxNzI0Mzk0MjYzfQ.UtEjqVS2ocRLT2gfVLHIH-o6woFQJxBRpZOZUOJBMUU';
  constructor() {}

  public GetHeaders(): HttpHeaders {
    let headers = new Headers();
    headers.append('Authorization', this.token);
    headers.append('Content-Type', 'aplication/json');
    return new HttpHeaders(headers);
  }

  public UnauthorizedHeaders() {
    return new HttpHeaders();
  }

  public FormDataHeaders() {
    let headers = new Headers();
    headers.append('Authorization', this.token);
    headers.append('Content-Type', 'multipart/form-data');
  }
}
