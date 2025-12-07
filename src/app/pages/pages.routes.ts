import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

export const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent
    },
    {
        path: '**',
        loadComponent: () => import('@pages/not-found/not-found.component').then(c => c.NotFoundComponent)
    }
];
