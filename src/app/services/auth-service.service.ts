import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { Iauth } from '../interfaces/iauth';
import { Iuser } from '../interfaces/iuser';
import { NavigationService } from './navigation-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(
    private readonly _httpServices: HttpServiceService,
    private readonly _navigationService: NavigationService
  ) {}

  public AuhtLogin(credentials: Iuser) {
    console.log({ credentials });

    return this._httpServices
      .Post<Iuser, Iauth>('login', credentials)
      .subscribe({
        next: (res) => {
          window.localStorage.setItem(
            'access_token',
            `${res.token_type} ${res.access_token}`
          );
          this._navigationService.navigateTo('blogs');
        },
        error: () => {
          return false;
        },
      });
  }

  public IsAuthenticated(): boolean {
    const token = window.localStorage.getItem('access_token');
    return !!token;
  }

  public Logout() {}
}
