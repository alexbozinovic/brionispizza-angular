import { Routes } from "@angular/router";
import { MenuStore } from "./daily-menu/menus/store/menu.store";

export const MENUS_ROUTES: Routes = [
    {
        path: 'menu',
        loadComponent: () => import('./daily-menu/daily-menu').then(m => m.DailyMenu),
        loadChildren: () => import('./daily-menu/daily-menu.routes').then(m => m.DailyMenuRoutes),
        title: "Brioni's Pizza - Daily Menu",
        providers: [MenuStore]
    },
    {
        path: 'catering',
        loadComponent: () => import('./catering-menu/catering-menu').then(m => m.CateringMenu),
        title: "Brioni's Pizza - Catering Menu"
    },
    {
        path: 'specials',
        loadComponent: () => import('./specials-menu/specials-menu').then(m => m.SpecialsMenu),
        title: "Brioni's Pizza - Specials Menu"
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'daily-menu'
    }
]