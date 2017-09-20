import { Component } from '@angular/core';

import { LayoutComponent } from '../components/layout/layout.component';

@Component({
  selector: 'my-app',
  template: '<layout></layout>'
})
export class AppComponent  { name = 'Angular'; }
