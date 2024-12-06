import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { EnumParserPipe } from './pipes/enum-parser.pipe';
import { DietaryFilterPipe } from './pipes/dietary-filter.pipe';
import { HomeComponent } from './home/home.component';
import { IndulgenceComponent } from './indulgence/indulgence.component';
import { StoreComponent } from './store/store.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { StorePreviewComponent } from './modals/store-preview/store-preview.component';
import { BakeryComponent } from './bakery/bakery.component';
import { IndulgencePreviewComponent } from './indulgence-preview/indulgence-preview.component';
import { NamesSliderComponent } from './names-slider/names-slider.component';
import { DeviceService } from './services/device.service';
import { StudioPreviewComponent } from './modals/studio-preview/studio-preview.component';
import { FooterComponent } from './footer/footer.component';
import { MenuCardComponent } from './menu-card/menu-card.component';

@NgModule
({
  declarations:
  [
    AppComponent,
    ProductFilterPipe,
    EnumParserPipe,
    DietaryFilterPipe,
    HomeComponent,
    IndulgenceComponent,
    StoreComponent,
    AboutUsComponent,
    ContactComponent,
    StorePreviewComponent,
    StudioPreviewComponent,
    BakeryComponent,
    IndulgencePreviewComponent,
    NamesSliderComponent,
    FooterComponent,
    MenuCardComponent
  ],
  imports:
  [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
