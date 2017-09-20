import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';

import { LayoutComponent } from '../components/layout/layout.component';

@NgModule({
  imports: [BrowserModule, AppRouting, NgbModule.forRoot()],
  declarations: [AppComponent, LayoutComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})

export class AppModule { }