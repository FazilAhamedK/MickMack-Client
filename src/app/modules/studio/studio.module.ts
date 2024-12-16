import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudioRoutingModule } from './studio-routing.module';
import { StudioComponent } from './studio.component';
import { KitchenLibraryComponent } from './kitchen-library/kitchen-library.component';
import { BakingClassComponent } from './baking-class/baking-class.component';
import { SharedModule } from '../shared/shared.module';

@NgModule
({
  declarations:
  [
    StudioComponent,
    KitchenLibraryComponent,
    BakingClassComponent
  ],
  imports:
  [
    CommonModule,
    StudioRoutingModule,
    SharedModule
  ]
})
export class StudioModule
{ }