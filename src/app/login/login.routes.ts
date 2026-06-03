import { Routes } from '@angular/router';

export const loginRoutes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin').then(c => c.Admin),
        title: 'Brionis Pizza - Administrator Panel'
    }
];