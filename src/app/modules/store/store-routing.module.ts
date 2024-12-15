import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store.component';
import { CookingBooksComponent } from './cooking-books/cooking-books.component';

const routes: Routes =
[
  {path: "", component: StoreComponent},
  {path: "cooking-books", component: CookingBooksComponent},
  {path: "**", redirectTo: "", pathMatch: "full"}
];

@NgModule
({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule
{ }