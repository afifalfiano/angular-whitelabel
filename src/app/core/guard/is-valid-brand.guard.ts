import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Brands } from '@config/brands';

export const isValidBrandGuard: CanActivateFn = (route, state) => {
  const brands = Brands; // Example valid brands
  const router = inject(Router);
  const brand = route.paramMap.get('brand');
  if (!brand || !brands.includes(brand)) {
    router.navigate(['']);
    return false;
  }
  return brand !== null && brands.includes(brand);
};
