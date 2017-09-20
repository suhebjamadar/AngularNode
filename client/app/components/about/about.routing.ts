import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';

const aboutRoutes: Routes = [
    { path: '', component: AboutComponent }
];

export const AboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);