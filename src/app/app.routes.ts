import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () =>
            import('./home/home.component').then((c) => c.HomeComponent),
        data: { animation: 'isHome' },
    },
    // {
    //     path: 'starships',
    //     loadComponent: () =>
    //         import('./starships/starships.component').then(
    //             (c) => c.StarshipsComponent
    //         ),
    //     data: { animation: 'isRight' },
    //     canActivate: [authGuard],
    // },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: '**',
        loadComponent: () =>
            import('./e404/e404.component').then((c) => c.E404Component),
    },
];
