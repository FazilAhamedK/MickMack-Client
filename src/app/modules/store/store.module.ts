import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { CookingBooksComponent } from './cooking-books/cooking-books.component';


@NgModule({
  declarations: [
    StoreComponent,
    CookingBooksComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule
  ]
})
export class StoreModule { }
