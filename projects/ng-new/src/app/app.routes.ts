import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'page-a', 
        loadComponent: () => import('./pages/page-a/page-a.component')
    },
    {path: 'page-b/:id', 
        loadComponent: () => import('./pages/page-b/page-b.component')
    },
    {path: 'page-c', 
        loadComponent: () => import('./pages/page-c/page-c.component')
    },
    {path: 'signals', 
        loadComponent: () => import('./pages/signals/signals.component')
    }

];
