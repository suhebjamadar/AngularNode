import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';

const contactRoutes: Routes = [
    { path: '', component: ContactComponent }
];

export const ContactRouting: ModuleWithProviders = RouterModule.forChild(contactRoutes);