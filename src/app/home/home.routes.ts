import { Routes } from "@angular/router";

export const HomeRoutes: Routes = [
    { 
        path: '', 
        loadComponent: () => 
            import('../shared/ui/hero/hero').then(m => m.HeroComponent),
        title: 'Brioni\'s Pizza - Home'
    },
    {
        path: 'info',
        loadComponent: () => import('./site/info/info').then(c => c.Info),
        title: 'Brioni\'s Pizza - About'
    },
    {
        path: 'menus',
        loadChildren: () => import('./site/menus/menus.routes').then(m => m.MENUS_ROUTES),
        title: 'Brioni\'s Pizza - Menus'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: ''
    }
];