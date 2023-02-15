import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MainRoutingModule } from './main-routing.modules';

@NgModule({
  declarations: [MainComponent, TopBarComponent, SideBarComponent],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
