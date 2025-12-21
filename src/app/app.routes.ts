import { Routes } from '@angular/router';
import { isValidBrandGuard } from '@core/guard/is-valid-brand.guard';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('@pages/pages.component').then(c => c.PagesComponent),
    },
    {
        path: ':brand', // dynamic brand path
        canActivate: [isValidBrandGuard],
        loadComponent: () => import('@pages/pages.component').then(c => c.PagesComponent),
        loadChildren: () => import('@pages/pages.routes').then(r => r.pagesRoutes)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
