import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonGroupRoutingModule } from './button-group-routing.module';
import { ButtonGroupComponent } from './button-group.component';
import { ButtonModule } from 'ngc-ui';

@NgModule({
  declarations: [ButtonGroupComponent],
  imports: [CommonModule, ButtonModule, ButtonGroupRoutingModule],
})
export class ButtonGroupModule {}
