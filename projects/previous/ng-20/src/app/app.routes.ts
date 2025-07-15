import { Routes } from '@angular/router';
import { Page1 } from './pages/page-1/page-1';
import { Page2 } from './pages/page-2/page-2';
import { Page3 } from './pages/page-3/page-3';
import { delay, Observable, of } from 'rxjs';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: () => getRandomPage()},
    {path: 'page-1', component: Page1}, 
    {path: 'page-2', component: Page2},
    {path: 'page-3', component: Page3}, 
];

function getRandomPage(): Observable<string> {
    const pages = ['/page-1', '/page-2', '/page-3'];
    const randomIndex = Math.floor(Math.random() * 3);
    const randomPage = pages[randomIndex];
    return of(randomPage).pipe(
        delay(3000) // Simulate a delay of 1 second
    );
}
