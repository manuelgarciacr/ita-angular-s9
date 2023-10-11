import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "home",
        loadComponent: () =>
            import("./home/home.component").then(c => c.HomeComponent),
        data: { animation: "isHome", trn: "Home" }, // trn: Tag for translation
    },
    {
        path: "broom",
        loadComponent: () =>
            import("./home/home.component").then(c => c.HomeComponent),
        data: { animation: "isRight", trn: "Broom" },
        //canActivate: [authGuard],
    },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    {
        path: "**",
        loadComponent: () =>
            import("./e404/e404.component").then(c => c.E404Component),
    },
];
