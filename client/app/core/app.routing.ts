import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [

    { path: '', loadChildren: 'app/components/home/home.module#HomeModule' },
    { path: 'home', loadChildren: 'app/components/home/home.module#HomeModule' },
    { path: 'about', loadChildren: 'app/components/about/about.module#AboutModule' },
    { path: 'contact', loadChildren: 'app/components/contact/contact.module#ContactModule' },
    { path: 'user', loadChildren: 'app/components/user/user.module#UserModule' },
    //otherwise redirect to home
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
