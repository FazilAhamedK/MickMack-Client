import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { NavigationLink } from './types/navigation-link.type';

@Component
({
  selector: 'mm-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent
{
  isMobileDevice: boolean = false;

  isNavBarCollapsed: boolean = true;
  
  showStorePreviewModal: boolean = false;

  constructor()
  {
    this.isMobileDevice = window.innerWidth < 768;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize()
  {
    this.isMobileDevice = window.innerWidth < 768;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll()
  {
    this.isNavBarCollapsed = true;
  }
}