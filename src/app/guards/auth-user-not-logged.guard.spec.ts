import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authUserNotLoggedGuard } from './auth-user-not-logged.guard';

describe('authUserNotLoggedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authUserNotLoggedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
