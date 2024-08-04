import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { AppComponent } from './app.component';

const routes: Routes =
[
  {path: "", component: AppComponent},
  {path: "store", component: StoreComponent},
  {path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule
({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
{ }