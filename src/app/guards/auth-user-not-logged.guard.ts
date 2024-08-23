import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthUserNotLoggedGuard implements CanActivate {
  constructor(
    private readonly _authService: AuthServiceService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log({ state, route });

    if (this._authService.IsAuthenticated()) {
      this.router.navigate(['blogs']);
      return false;
    } else {
      return true;
    }
  }
}
