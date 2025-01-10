import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from './services/device.service';
import { Subscription } from 'rxjs';

@Component
({
  selector: 'mm-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy
{
  private deviceIsMobileSubscription!: Subscription;

  isMobileDevice: boolean = false;
  isNavBarCollapsed: boolean = true;
  showStorePreviewModal: boolean = false;
  showStudioPreviewModal: boolean = false;
  showKitchenPreviewModal: boolean = false;

  constructor(private router: Router, private deviceService: DeviceService)
  { }

  ngOnInit(): void
  {
    this.deviceIsMobileSubscription = this.deviceService.isMobile.subscribe(isMobile => this.isMobileDevice = isMobile);
  }

  ngOnDestroy(): void
  {
    if (this.deviceIsMobileSubscription)
    {
      this.deviceIsMobileSubscription.unsubscribe();
    }
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll()
  {
    this.isNavBarCollapsed = true;
  }
}