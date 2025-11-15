import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'base', // redirect to base brand by default
        pathMatch: 'full'
    },
    {
        path: ':brand', // dynamic brand path
        loadComponent: () => import('@pages/pages.component').then(c => c.PagesComponent),
        loadChildren: () => import('@pages/pages.routes').then(r => r.pagesRoutes)
    }
];
