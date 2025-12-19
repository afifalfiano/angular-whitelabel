import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const isValidBrandGuard: CanActivateFn = (route, state) => {
  const validBrands = ['brand-A', 'brand-B', 'brand-C']; // Example valid brands
  const router = inject(Router);
  const brand = route.paramMap.get('brand');
  if (!brand || !validBrands.includes(brand)) {
    router.navigate(['']);
    return false;
  }
  return brand !== null && validBrands.includes(brand);
};
