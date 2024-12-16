import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFilterPipe } from '../../pipes/product-filter.pipe';

@NgModule
({
  declarations: [ProductFilterPipe],
  exports: [ProductFilterPipe],
  imports: [CommonModule]
})
export class SharedModule
{ }