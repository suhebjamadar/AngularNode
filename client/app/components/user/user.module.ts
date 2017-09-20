import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserRouting } from './user.routing';

import { UserComponent } from './user.component';

import { UserService } from './user.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule, 
        HttpModule,
        UserRouting
    ],
    declarations: [
        UserComponent
    ],
    providers: [
        UserService
    ]
})

export class UserModule { }