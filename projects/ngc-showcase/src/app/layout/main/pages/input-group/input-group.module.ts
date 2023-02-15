import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputGroupRoutingModule } from './input-group-routing.module';
import { InputGroupComponent } from './input-group.component';


@NgModule({
  declarations: [
    InputGroupComponent
  ],
  imports: [
    CommonModule,
    InputGroupRoutingModule
  ]
})
export class InputGroupModule { }
