import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./00-home/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'inject',
    loadComponent: () =>
      import('./01-inject/inject-demo/inject-demo.component').then(
        (m) => m.InjectDemoComponent
      ),
  },
  {
    path: 'defer',
    loadComponent: () => import('./02-defer/defer-demo/defer-demo.component'),
  },
  {
    path: 'directives',
    loadComponent: () => import('./03-directives/directives-demo/directives-demo.component'),
  },
  {
    path: 'router-fun/:id', 
    loadComponent: () => import('./04-router-fun/router-fun-demo/router-fun-demo.component')
  },
  {
    path: 'signals', 
    loadComponent: () => import('./05-signals/signal-demo/signal-demo.component')
  }
];
