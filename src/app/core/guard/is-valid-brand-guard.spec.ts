import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isValidBrandGuard } from './is-valid-brand.guard';

describe('isValidBrandGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isValidBrandGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
