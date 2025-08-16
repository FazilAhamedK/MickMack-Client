import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenLibraryComponent } from './kitchen-library/kitchen-library.component';
import { BakingClassComponent } from './baking-class/baking-class.component';
import { DecoratingClassComponent } from './decorating-class/decorating-class.component';

const routes: Routes =
[
  {path: "", redirectTo: "baking", pathMatch: "full"},
  {path: "baking", component: BakingClassComponent},
  {path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule
({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudioRoutingModule
{ }