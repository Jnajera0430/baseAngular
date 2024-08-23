import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpHeadersService } from './http-headers.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  private readonly headers: HttpHeaders = new HttpHeaders();
  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _httpHeaders: HttpHeadersService
  ) {
    this.headers = this._httpHeaders.GetHeaders();
  }

  public Get<T>(endpoint: string): Observable<T> {
    return this._httpClient.get<T>(`${environment.URL_API}/${endpoint}`, {
      headers: this.headers,
    });
  }

  public Post<T, P>(endpoint: string, body: T) {
    return this._httpClient.post<P>(
      `${environment.URL_API}/${endpoint}`,
      body,
      {
        headers: this.headers,
      }
    );
  }

  public Patch<T>(endpoint: string, body: T) {
    return this._httpClient.patch(`${environment.URL_API}/${endpoint}`, body, {
      headers: this.headers,
    });
  }

  public Put<T>(endpoint: string, body: T) {
    return this._httpClient.put<T>(`${environment.URL_API}/${endpoint}`, body, {
      headers: this.headers,
    });
  }

  public Delete(endpoint: string) {
    return this._httpClient.delete(`${environment.URL_API}/${endpoint}`, {
      headers: this.headers,
    });
  }
}
