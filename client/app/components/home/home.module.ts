import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeRouting } from './home.routing';

import { HomeComponent } from './home.component';
import { CarouselComponent } from '../carousel/carousel.component';

@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        HomeRouting
    ],
    declarations: [
        HomeComponent, CarouselComponent
    ]
})

export class HomeModule { }