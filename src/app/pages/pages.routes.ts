import { Routes } from '@angular/router';

export const pagesRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('@pages/explore/explore.component').then(c => c.ExploreComponent)
    },
    {
        path: 'about',
        loadComponent: () => import('@pages/about/about.component').then(c => c.AboutComponent)
    },
    {
        path: 'products',
        loadComponent: () => import('@pages/products/products.component').then(c => c.ProductsComponent)
    },
    {
        path: '**',
        loadComponent: () => import('@pages/not-found/not-found.component').then(c => c.NotFoundComponent)
    }
];
