import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';

const userRoutes: Routes = [
    { path: '', component: UserComponent }
];

export const UserRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);