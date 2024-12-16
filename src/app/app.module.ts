import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnumParserPipe } from './pipes/enum-parser.pipe';
import { HomeComponent } from './home/home.component';
import { IndulgenceComponent } from './indulgence/indulgence.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { BakeryComponent } from './bakery/bakery.component';
import { IndulgencePreviewComponent } from './indulgence-preview/indulgence-preview.component';
import { NamesSliderComponent } from './names-slider/names-slider.component';
import { DeviceService } from './services/device.service';
import { FooterComponent } from './footer/footer.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { SharedModule } from './modules/shared/shared.module';

@NgModule
({
  declarations:
  [
    AppComponent,
    EnumParserPipe,
    HomeComponent,
    IndulgenceComponent,
    AboutUsComponent,
    ContactComponent,
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
    HttpClientModule,
    SharedModule
  ],
  providers: [DeviceService],
  bootstrap: [AppComponent]
})
export class AppModule
{ }
