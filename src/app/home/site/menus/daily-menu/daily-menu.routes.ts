import { Routes } from "@angular/router";

export const DailyMenuRoutes: Routes = [
    {
        path: 'side-orders',
        loadComponent: () => import('./menus/side-orders/side-orders').then(m => m.SideOrders),
        title: "Brioni's Pizza - Side Orders",
        data: {
            route: 'side-orders',
            label: 'Side Orders',
        }
    },
    {
        path: 'fresh-salads',
        loadComponent: () => import('./menus/fresh-salads/fresh-salads').then(m => m.FreshSalads),
        title: "Brioni's Pizza - Fresh Salads",
        data: {
            route: 'fresh-salads',
            label: 'Fresh Salads',
        }
    },
    {
        path: 'pizza',
        loadComponent: () => import('./menus/pizza/pizza').then(m => m.Pizza),
        title: "Brioni's Pizza - Pizza",
        data: {
            route: 'pizza',
            label: 'Pizza',
        }
    },
    {
        path: 'specialty-pizza',
        loadComponent: () => import('./menus/specialty-pizza/specialty-pizza').then(m => m.SpecialtyPizza),
        title: "Brioni's Pizza - Specialty Pizzas",
        data: {
            route: 'specialty-pizza',
            label: 'Specialty Pizza',
        }
    },
    {
        path: 'dinners',
        loadComponent: () => import('./menus/dinners/dinners').then(m => m.Dinners),
        title: "Brioni's Pizza - Dinners",
        data: {
            route: 'dinners',
            label: 'Dinners',
        }
    },
    {
        path: 'pasta-dishes',
        loadComponent: () => import('./menus/pasta-dishes/pasta-dishes').then(m => m.PastaDishes),
        title: "Brioni's Pizza - Pasta Dishes",
        data: {
            route: 'pasta-dishes',
            label: 'Pasta Dishes',
        }
    },
    {
        path: 'subs',
        loadComponent: () => import('./menus/subs/subs').then(m => m.Subs),
        title: "Brioni's Pizza - Subs",
        data: {
            route: 'subs',
            label: 'Subs',
        }
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pizza'
    }
];