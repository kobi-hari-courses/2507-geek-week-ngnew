import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'a', pathMatch: 'full' },
    {path: 'a', loadComponent: () => import('./pages/page-a/page-a.component')}, 
    {path: 'b', loadComponent: () => import('./pages/page-b/page-b.component')},
    {path: 'c', loadComponent: () => import('./pages/page-c/page-c.component')},
    
];
