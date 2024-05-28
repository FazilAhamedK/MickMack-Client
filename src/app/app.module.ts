import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { EnumParserPipe } from './pipes/enum-parser.pipe';
import { DietaryFilterPipe } from './pipes/dietary-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductFilterPipe,
    EnumParserPipe,
    DietaryFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
