import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./home/home').then(c => c.Home),
        loadChildren: () => import('./home/home.routes').then(c => c.HomeRoutes),
        title: 'Brionis Pizza',
    },
    {
        path: 'login',
        loadComponent: () => import('./login/login').then(c => c.Login),
        loadChildren: () => import('./login/login.routes').then(c => c.loginRoutes),
        title: 'Brionis Pizza - Administrator Login'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: ''
    }
];
