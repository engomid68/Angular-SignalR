import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { authGuardResolver } from './auth-guard.resolver';

describe('authGuardResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => authGuardResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
